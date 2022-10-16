The following questions focus on these considerations for reliability.

??? question "How do you monitor workload resources?"
    
    Logs and metrics are powerful tools to gain insight into the health of your workload. You can configure your workload to monitor logs and metrics and send notifications when thresholds are crossed or significant events occur. Monitoring enables your workload to recognize when low-performance thresholds are crossed or failures occur, so it can recover automatically in response.

??? question "How do you design your workload to adapt to changes in demand?"
    
    A scalable workload provides elasticity to add or remove resources automatically so that they closely match the current demand at any given point in time.

??? question "How do you implement change?"
    
    Controlled changes are necessary to deploy new functionality, and to ensure that the workloads and the operating environment are running known software and can be patched or replaced in a predictable manner. If these changes are uncontrolled, then it makes it difficult to predict the effect of these changes, or to address issues that arise because of them.

## Monitor Workload Resources
Monitoring at AWS consists of four distinct phases:

- **Generation — Monitor all components for the workload**
  All components of your workload should be monitored, including the front-end, business logic, and storage tiers. Define key metrics and how to extract them from logs, if necessary, and set create thresholds for corresponding alarm events. Monitoring in the cloud offers new opportunities. Most cloud providers have developed customizable hooks and insights into multiple layers of your workload. 

- **Aggregation — Define and calculate metrics**
  Store log data and apply filters where necessary to calculate metrics, such as counts of a specific log event, or latency calculated from log event timestamps.

- **Real-time processing and alarming — Send notifications and automate responses**
  Organizations that need to know receive notifications when significant events occur. Use automation to take action when an event is detected, for example, to replace failed components. 

- **Storage and Analytics**
  Collect log files and metrics histories and analyze these for broader trends and workload insights. 

## Design your Workload to Adapt to Changes in Demand
A scalable workload provides elasticity to add or remove resources automatically so that they closely match the current demand at any given point in time. 

## Implement Change
Controlled changes are necessary to deploy new functionality and to ensure that the workloads and the operating environment are running known, properly patched software. If these changes are uncontrolled, then it makes it difficult to predict the effect of these changes, or to address issues that arise because of them.

- **Integrate functional testing as part of your deployment:** Functional tests are run as part of automated deployment. If success criteria are not met, the pipeline is halted or rolled back.
- **Integrate resiliency testing as part of your deployment:** Resiliency tests (as part of chaos engineering) are run as part of the automated deployment pipeline in a pre-production environment.
- **Deploy using immutable infrastructure:** This is a model that mandates that no updates, security patches, or configuration changes happen in-place on production systems. When a change is needed, the architecture is built onto new infrastructure and deployed into production.  The most common implementation of the immutable infrastructure paradigm is the immutable server. This means that if a server needs an update or a fix, new servers are deployed instead of updating the ones already in use. So, instead of logging into the server via SSH and updating the software version, every change in the application starts with a software push to the code repository, for example, git push. Since changes are not allowed in immutable infrastructure, you can be sure about the state of the deployed system. Immutable infrastructures are inherently more consistent, reliable, and predictable, and they simplify many aspects of software development and operations.
- **Deploy changes with automation:** Deployments and patching are automated to eliminate negative impact.

<a href="https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/change-management.html">![aws-logo](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)</a>