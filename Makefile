all: run

run:
	docker run --name blockly-app -p 8765:80 -d -v $(shell pwd):/usr/share/nginx/html:ro nginx
	#
	# Go to http://0.0.0.0:8765/
	#
	# Kill it with "make kill"
	#

kill:
	docker rm -f blockly-app
