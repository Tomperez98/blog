The following question focuses on these considerations for cost optimization.

??? question "How do you evaluate cost when you select services?"

    Amazon EC2, Amazon EBS, and Amazon S3 are building-block AWS services. Managed services, such as Amazon RDS and Amazon DynamoDB, are higher level, or application level, AWS services. By selecting the appropriate building blocks and managed services, you can optimize this workload for cost. For example, using managed services, you can reduce or remove much of your administrative and operational overhead, freeing you to work on applications and business-related activities.

??? question "How do you meet cost targets when you select resource type, size and number?"

    Ensure that you choose the appropriate resource size and number of resources for the task at hand. You minimize waste by selecting the most cost effective type, size, and number.


??? question "How do you use pricing models to reduce cost?"

    Use the pricing model that is most appropriate for your resources to minimize expense.

??? question "How do you plan for data transfer charges?"

    Ensure that you plan and monitor data transfer charges so that you can make architectural decisions to minimize costs. A small yet effective architectural change can drastically reduce your operational costs over time.

## Evaluate Cost When Selecting Services
When selecting services for your workload, it is key that you understand your organization priorities. Ensure that you have a balance between cost and other Well-Architected pillars, such as performance and reliability. A fully cost-optimized workload is the solution that is most aligned to your organization’s requirements, not necessarily the lowest cost. Meet with all teams within your organization to collect information, such as product, business, technical and finance.

- **Managed services** remove the operational and administrative burden of maintaining a service, which allows you to focus on innovation. Additionally, because managed services operate at cloud scale, they can offer a lower cost per transaction or service. Consider the time savings that will allow your team to focus on retiring technical debt, innovation, and value-adding features.
- **Serverless or Application-level Services:** You can use serverless or application-level services such as AWS Lambda, Amazon Simple Queue Service (Amazon SQS), Amazon Simple Notification Service (Amazon SNS), and Amazon Simple Email Service (Amazon SES). These services remove the need for you to manage a resource, and provide the function of code execution, queuing services, and message delivery. The other benefit is that they scale in performance and cost in line with usage, allowing efficient cost allocation and attribution.

## Select the Correct Resource Type, Size, and Number
By selecting the best resource type, size, and number of resources, you meet the technical requirements with the lowest cost resource. Right-sizing activities takes into account all of the resources of a workload, all of the attributes of each individual resource, and the effort involved in the right-sizing operation. Right-sizing can be an iterative process, triggered by changes in usage patterns and external factors, such as AWS price drops or new AWS resource types. Right-sizing can also be one-off if the cost of the effort to right-size, outweighs the potential savings over the life of the workload.

In AWS, there are a number of different approaches:

- Perform cost modeling
- Select size based on metrics or data
- Select size automatically (based on metrics)

## Select the Best Pricing Model

**Pricing Models:** AWS has multiple pricing models that allow you to pay for your resources in the most cost-effective way that suits your organization's needs. The following section describes each purchasing model.
  
  - **On-Demand:** This is the default, pay as you go pricing model. When you use resources (for example, EC2 instances or services such as DynamoDB on demand) you pay a flat rate, and you have no long-term commitments. You can increase or decrease the capacity of your resources or services based on the demands of your application.
  - **Spot:** A Spot Instance is spare EC2 compute capacity available at discounts of up to 90% off On-Demand prices with no long-term commitment required. With Spot Instances, you can significantly reduce the cost of running your applications or scale your application’s compute capacity for the same budget. Unlike On-Demand, Spot Instances can be interrupted with a 2-minute warning if EC2 needs the capacity back, or the Spot Instance price exceeds your configured price. On average, Spot Instances are interrupted less than 5% of the time.
  - **Commitment discounts - Savings Plans:** AWS provides a number of ways for you to reduce your costs by reserving or committing to use a certain amount of resources, and receiving a discounted rate for your resources. A Savings Plan allows you to make an hourly spend commitment for one or three years, and receive discounted pricing across your resources. Savings Plans provide discounts for AWS Compute services such as EC2, Fargate, and Lambda.
  There are three payment options:
    - **No upfront payment:** There is no upfront payment; you then pay a reduced hourly rate each month for the total hours in the month.
    - **Partial upfront payment:** Provides a higher discount rate than No upfront. Part of the usage is paid up front; you then pay a smaller reduced hourly rate each month for the total hours in the month.
    - **All upfront payment:** Usage for the entire period is paid up front, and no other costs are incurred for the remainder of the term for usage that is covered by the commitment.
  - **Commitment Discounts – Reserved Instances/Commitment:** Similar to Savings Plans, Reserved Instances (RI) offer discounts up to 72% for a commitment to running a minimum amount of resources. Reserved Instances are available for RDS, Elasticsearch, ElastiCache, Amazon Redshift, and DynamoDB. Amazon CloudFront and AWS Elemental MediaConvert also provide discounts when you make minimum usage commitments. Reserved Instances are currently available for Amazon EC2, however Savings Plans offer the same discount levels with increased flexibility and no management overhead.
  - **Geographic Selection:** When you architect your solutions, a best practice is to seek to place computing resources closer to users to provide lower latency and strong data sovereignty. For global audiences, you should use multiple locations to meet these needs. You should select the geographic location that minimizes your costs.
  - **Third-party agreements and pricing:** When you utilize third-party solutions or services in the cloud, it is important that the pricing structures are aligned to Cost Optimization outcomes. Pricing should scale with the outcomes and value it provides.


<a href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/cost-effective-resources.html">![aws-logo](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)</a>