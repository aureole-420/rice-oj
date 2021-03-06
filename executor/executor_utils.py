import docker 
import os
import shutil
import uuid

from docker.errors import APIError
from docker.errors import ContainerError
from docker.errors import ImageNotFound


# get current director
CURRENT_DIR = os.path.dirname(os.path.relpath(__file__))
IMAGE_NAME = 'aureole420/cs503' # use the image name you created
# IMAGE_NAME = 'melishua/cs503' # use the image name you created


client = docker.from_env()

# store the code in tmp folder
TEMP_BUILD_DIR = "%s/tmp" % CURRENT_DIR
CONTAINER_NAME = "%s:latest" % IMAGE_NAME

SOURCE_FILE_NAMES = {
    "java": "Example.java",
    "python": "example.py",
    "c++": "example.cpp"
}

BINARY_NAMES = {
    "java": "Example",
    "python": "example.py",
    "c++": "./a.out"
}

BUILD_COMMANDS = {
    "java": "javac",
    "python": "python3",
    "c++": "g++"
}

EXECUTE_COMMANDS = {
    "java": "java",
    "python": "python3",
    "c++": "" 
}
# c++ 编译后有最终的binary 文件


# load docker image to execute code
def load_image():
    try:
        client.images.get(IMAGE_NAME)
        print("Image exists locally")
    except ImageNotFound:
        # if we don't have localy copy of the image, loading from docker hub
        print("Image not found locally, loading from docker hub")
        client.images.pull(IMAGE_NAME)
    except APIError:
        # if we cannot connect to docker, we cannot run the coee
        # so just return
        print("Cannot connect to docker")
        return

def make_dir(dir):
    try:
        os.mkdir(dir)
    except OSError:
        print("cannot create directory")


def build_and_run(code, lang):
    # the result we want
    result = {'build': None, 'run': None, 'error': None}
    #use the uuid to create unique file name
    source_file_parent_dir_name = uuid.uuid4()
    # shared folder that can be used in docker
    source_file_host_dir = "%s/%s" % (TEMP_BUILD_DIR, source_file_parent_dir_name)
    source_file_guest_dir = "/test/%s" % (source_file_parent_dir_name)

    make_dir(source_file_host_dir)

    # wirete the code into source file
    with open("%s/%s" % (source_file_host_dir, SOURCE_FILE_NAMES[lang]), 'w') as source_file: 
        source_file.write(code)
    
    # build code
    try: 
        client.containers.run(
            image = IMAGE_NAME,
            # run this command to build the code
            command = "%s %s" % (BUILD_COMMANDS[lang], SOURCE_FILE_NAMES[lang]),
            # bind the host dir and guest dir, 'rw': read and write
            # means we have read and write permission of guest dir
            # docker can access the host dir
            volumes = {source_file_host_dir: {'bind': source_file_guest_dir, 'mode':'rw'}},
            working_dir = source_file_guest_dir
        )
        print("source built")
        result['build'] = 'OK'

    except ContainerError as e:
        # fail to biuld, get the error message from container
        result['build'] = str(e.stderr, 'utf-8')
        #remove host dir
        shutil.rmtree(source_file_host_dir)
        return result

    # run code if it is built
    try: 
        log = client.containers.run(
            image = IMAGE_NAME,
            # run this command to execute the code
            command = "%s %s" % (EXECUTE_COMMANDS[lang], BINARY_NAMES[lang]),
            # bind the host dir and guest dir, 'rw' read and write
            volumes = {source_file_host_dir: {'bind': source_file_guest_dir, 'mode':'rw'}},
            working_dir = source_file_guest_dir
        )

        log = str(log, 'utf-8')
        result['run'] = log
    except ContainerError as e:
        result['run'] = str(e.stderr, 'utf-8')
        # remove host dir
        shutil.rmtree(source_file_host_dir)
        return result
    
    # after build and run clean up dir
    shutil.rmtree(source_file_host_dir)
    return result

