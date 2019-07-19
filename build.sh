#!/bin/bash
docker build -t attempt30 .
docker run -d -p 3012:3012 --name blahblah  attempt30
