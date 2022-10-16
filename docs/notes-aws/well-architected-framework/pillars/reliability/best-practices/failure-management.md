The following questions focus on these considerations for reliability.

??? question "How do you back up data?"

    Back up data, applications, and configuration to meet your requirements for recovery time objectives (RTO) and recovery point objectives (RPO).

??? question "How do you use fault isolation to protect your workload?"

    Fault isolated boundaries limit the effect of a failure within a workload to a limited number of components. Components outside of the boundary are unaffected by the failure. Using multiple fault isolated boundaries, you can limit the impact on your workload.

??? question "How do you design your workload to withstand component failures?"

    Workloads with a requirement for high availability and low mean time to recovery (MTTR) must be architected for resiliency.

??? question "How do you test reliability?"

    After you have designed your workload to be resilient to the stresses of production, testing is the only way to ensure that it will operate as designed, and deliver the resiliency you expect.

??? question "How do you plan for disaster recovery (DR)?"

    Having backups and redundant workload components in place is the start of your DR strategy. RTO and RPO are your objectives for restoration of your workload. Set these based on business needs. Implement a strategy to meet these objectives, considering locations and function of workload resources and data. The probability of disruption and cost of recovery are also key factors that help to inform the business value of providing disaster recovery for a workload.

## Back up Data
 Back up data, applications, and configuration to meet requirements for recovery time objectives (RTO) and recovery point objectives (RPO). 

- **Identify and back up all data that needs to be backed up, or reproduce the data from sources**
- **Secure and encrypt backup**
- **Perform data backup automatically**
- **Perform periodic recovery of the data to verify backup integrity and processes**

## Use Fault Isolation to Protect Your Workload

- **Deploy the workload to multiple locations:** Distribute workload data and resources across multiple Availability Zones or, where necessary, across AWS Regions. These locations can be as diverse as required.

## Design your Workload to Withstand Component Failures

- **Monitor all components of the workload to detect failures:** Continuously monitor the health of your workload so that you and your automated systems are aware of degradation or complete failure as soon as they occur. Monitor for key performance indicators (KPIs) based on business value.
- **Failover to healthy resources:** Ensure that if a resource failure occurs, that healthy resources can continue to serve requests. For location failures (such as Availability Zone or AWS Region) ensure you have systems in place to failover to healthy resources in unimpaired locations.
- **Automate healing on all layers:** Upon detection of a failure, use automated capabilities to perform actions to remediate.
- **Send notifications when events impact availability:** Notifications are sent upon the detection of significant events, even if the issue caused by the event was automatically resolved.

## Test Reliability
Test to validate that your workload meets functional and non-functional requirements, because bugs or performance bottlenecks can impact the reliability of your workload. Test the resiliency of your workload to help you find latent bugs that only surface in production. Exercise these tests regularly. 

## Plan for Disaster Recovery (DR)
Both Availability and Disaster Recovery rely on the same best practices such as monitoring for failures, deploying to multiple locations, and automatic failover. However Availability focuses on components of the workload, while Disaster Recovery focuses on discrete copies of the entire workload. Disaster Recovery has different objectives from Availability, focusing on time to recovery after a disaster.

- **Define recovery objectives for downtime and data loss:** The workload has a recovery time objective (RTO) and recovery point objective (RPO).
- **Use defined recovery strategies to meet the recovery objectives:** A disaster recovery (DR) strategy has been defined to meet objectives. Choose a strategy such as: backup and restore, active/passive (pilot light or warm standby), or active/active.

<a href="https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/failure-management.html">![aws-logo](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)</a>