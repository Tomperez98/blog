The following question focuses on these considerations for performance efficiency.

??? question "How do you select your compute solution?"

    The optimal compute solution for a workload varies based on application design, usage patterns, and configuration settings. Architectures can use different compute solutions for various components and enable different features to improve performance. Selecting the wrong compute solution for an architecture can lead to lower performance efficiency.

The optimal compute choice for a particular workload can vary based on application design, usage patterns, and configuration settings. Architectures may use different compute choices for various components and enable different features to improve performance. Selecting the wrong compute choice for an architecture can lead to lower performance efficiency.

## Instances
Instances are virtualized servers, allowing you to change their capabilities with a button or an API call. Because resource decisions in the cloud aren’t fixed, you can experiment with different server types. At AWS, these virtual server instances come in different families and sizes, and they offer a wide variety of capabilities, including solid-state drives (SSDs) and graphics processing units (GPUs).

Use data to select the optimal EC2 instance type for your workload, ensure that you have the correct networking and storage options, and consider operating system settings that can improve the performance for your workload.

## Containers
Containers are a method of operating system virtualization that allow you to run an application and its dependencies in resource-isolated processes.

When running containers on AWS, you have two choices to make. First, choose whether or not you want to manage servers. AWS Fargate is serverless compute for containers, or Amazon EC2 can be used if you need control over the installation, configuration, and management of your compute environment. Second, choose which container orchestrator to use: Amazon Elastic Container Service (ECS) or Amazon Elastic Kubernetes Service (EKS)

- **Amazon Elastic Container Service (Amazon ECS)** is a fully managed container orchestration service that allows you to automatically execute and manage containers on a cluster of EC2 instances or serverless instances using AWS Fargate. You can natively integrate Amazon ECS with other services such as Amazon Route 53, Secrets Manager, AWS Identity and Access Management (IAM), and Amazon CloudWatch.

- **Amazon Elastic Kubernetes Service (Amazon EKS)** is a fully managed Kubernetes service. You can choose to run your EKS clusters using AWS Fargate, removing the need to provision and manage servers. EKS is deeply integrated with services such as Amazon CloudWatch, Auto Scaling Groups, AWS Identity and Access Management (IAM), and Amazon Virtual Private Cloud (VPC).

When using containers, you must use data to select the optimal type for your workload — just as you use data to select your EC2 or AWS Fargate instance types. Consider container configuration options such as memory, CPU, and tenancy configuration. To enable network access between container services, consider using a service mesh such as [AWS App Mesh](https://aws.amazon.com/app-mesh/), which standardizes how your services communicate. Service mesh gives you end-to-end visibility and ensures high-availability for your applications.

## Functions
Functions abstract the execution environment from the code you want to execute. For example, AWS Lambda allows you to execute code without running an instance.

You can use AWS Lambda to run code for any type of application or backend service with zero administration. Simply upload your code, and AWS Lambda will manage everything required to run and scale that code. You can set up your code to automatically trigger from other AWS services, call it directly, or use it with Amazon API Gateway.

Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. You can create an API that acts as a “front door” to your Lambda function. API Gateway handles all the tasks involved in accepting and processing up to hundreds of thousands of concurrent API calls, including traffic management, authorization and access control, monitoring, and API version management.

To deliver optimal performance with AWS Lambda, choose the amount of memory you want for your function. You are allocated proportional CPU power and other resources. For example, choosing 256 MB of memory allocates approximately twice as much CPU power to your Lambda function as requesting 128 MB of memory. You can control the amount of time each function is allowed to run (up to a maximum of 900 seconds).

<a href="https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/compute-architecture-selection.html">![aws-logo](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)</a>