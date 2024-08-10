import * as cdk from 'aws-cdk-lib';
import { AttributeType, BillingMode, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class GettingStartedWithCdklocalStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const ddbTable = new Table(this, 'DynamoDBTable', {
      partitionKey: { name: "pk", type: AttributeType.STRING },
      sortKey: { name: "sk", type: AttributeType.STRING },
      tableName: 'your-dynamodb',
      billingMode: BillingMode.PAY_PER_REQUEST,
    });

    new Bucket(this, 'Bucket', {
      bucketName: 'your-bucket',
    });
  }
}
