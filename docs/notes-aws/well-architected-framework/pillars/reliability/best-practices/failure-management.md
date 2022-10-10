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


<a href="https://docs.aws.amazon.com/wellarchitected/latest/framework/rel-failmgmt.html">![aws-logo](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)</a>