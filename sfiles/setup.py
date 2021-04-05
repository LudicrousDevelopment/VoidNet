import json
import time
import subprocess

print("This Selects Which Port Your Server Will run From (Default 8080).")
port = input("Enter Port (1024-65535):")
print("Port set to "+str(port))
time.sleep(1)
print("Setup Complete")
time.sleep(3)
print("Running Server...")
file1 = open("sfiles/run.txt","r+")
old = file1.read()
change = 1
file1.truncate(0)
file1.write(str(old)+str(change))
file1.close()
time.sleep(2)
with open('config.json', 'r+') as f:
    data = json.load(f)
    data['port'] = port,
    data['prefix'] = prefix
    f.seek(0)        
    json.dump(data, f, indent=4)
    f.truncate()  
subprocess.check_call('npm run server', shell=True)