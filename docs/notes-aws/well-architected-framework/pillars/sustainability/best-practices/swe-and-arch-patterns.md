The following question focuses on these considerations for sustainability.

??? question "How do you take advantage of software and architecture patterns to support your sustainability goals?"

    Implement patterns for performing load smoothing and maintaining consistent high utilization of deployed resources to minimize the resources consumed. Components might become idle from lack of use because of changes in user behavior over time. Revise patterns and architecture to consolidate under-utilized components to increase overall utilization. Retire components that are no longer required. Understand the performance of your workload components, and optimize the components that consume the most resources. Be aware of the devices your customers use to access your services, and implement patterns to minimize the need for device upgrades.

## Optimize software and architecture for asynchronous and scheduled jobs
Use efficient software designs and architectures to minimize the average resources required per unit of work. Implement mechanisms that result in even utilization of components to reduce resources that are idle between tasks and minimize the impact of load spikes.

## Remove or refactor workload components with low or no use
Monitor workload activity to identify changes in utilization of individual components over time. Remove components that are unused and no longer required, and refactor components with little utilization, to limit wasted resources.

## Optimize areas of code that consume the most time or resources
Monitor workload activity to identify application components that consume the most resources. Optimize the code that runs within these components to minimize resource usage while maximizing performance.

## Optimize impact on customer devices and equipment
Understand the devices and equipment your customers use to consume your services, their expected lifecycle, and the financial and sustainability impact of replacing those components. Implement software patterns and architectures to minimize the need for customers to replace devices and upgrade equipment. For example, implement new features using code that is backwards compatible with older hardware and operating system versions, or manage the size of payloads so they don’t exceed the storage capacity of the target device.

## Use software patterns and architectures that best support data access and storage patterns
Understand how data is used within your workload, consumed by your users, transferred, and stored. Select technologies to minimize data processing and storage requirements.

<a href="https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/software-and-architecture-patterns.html">![aws-logo](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)</a>