# Reliability
The Reliability pillar encompasses the ability of a workload to perform its intended function correctly and consistently when it’s expected to. This includes the ability to operate and test the workload through its total lifecycle. This paper provides in-depth, best practice guidance for implementing reliable workloads on AWS.

## **Definition**
There 4 best practice areas for reliability in the cloud:

- [Foundations](best-practices/foundations.md)
- [Workload Architecture](best-practices/workload-architecture.md)
- [Change Management](best-practices/change-management.md)
- [Failure Management](best-practices/failure-management.md)

To achieve reliability you must start with the foundations - an environment where service quotas and network topology accommodate the workload. **The workload architecture of the distributed system must be designed to prevent and mitigate failures.** The workload must handle changes in demand or requirements, and it must be designed to detect failure and automatically heal itself.

## **Design Principles**
There are 5 design principles for reliability in the cloud:

??? note "Automatically recover from failure"

    By monitoring a workload for key performance indicators (KPIs), you can trigger automation when a threshold is breached. These KPIs should be a measure of business value, not of the technical aspects of the operation of the service. This allows for automatic notification and tracking of failures, and for automated recovery processes that work around or repair the failure. With more sophisticated automation, it’s possible to anticipate and remediate failures before they occur.

??? note "Test recovery procedures"

    In an on-premises environment, testing is often conducted to prove that the workload works in a particular scenario. Testing is not typically used to validate recovery strategies. In the cloud, you can test how your workload fails, and you can validate your recovery procedures. You can use automation to simulate different failures or to recreate scenarios that led to failures before. This approach exposes failure pathways that you can test and fix before a real failure scenario occurs, thus reducing risk.

??? note "Scale horizontally to increase aggregate workload availability"

    Replace one large resource with multiple small resources to reduce the impact of a single failure on the overall workload. Distribute requests across multiple, smaller resources to ensure that they don’t share a common point of failure.

??? note "Stop guessing capacity"

    A common cause of failure in on-premises workloads is resource saturation, when the demands placed on a workload exceed the capacity of that workload (this is often the objective of denial of service attacks). In the cloud, you can monitor demand and workload utilization, and automate the addition or removal of resources to maintain the optimal level to satisfy demand without over- or under-provisioning. There are still limits, but some quotas can be controlled and others can be managed (see Manage Service Quotas and Constraints).

??? note "Manage change in automation"

    Changes to your infrastructure should be made using automation. The changes that need to be managed include changes to the automation, which then can be tracked and reviewed.

<a href="https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html">![aws-logo](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)</a>
