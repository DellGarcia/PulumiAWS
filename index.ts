import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

const buckets = ["bucket1", "bucket2", "bucket3"]

const bucketsIds = buckets.map(bucket => new aws.s3.BucketV2(bucket).id)

export const bucketName = bucketsIds;
