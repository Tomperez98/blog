The following questions focus on these considerations for operational excellence.

??? question "How do you design your workload so that you can understand its state?"

    Design your workload so that it provides the information necessary across all components (for example, metrics, logs, and traces) for you to understand its internal state. This enables you to provide effective responses when appropriate.

??? question "How do you reduce defects, ease remediation, and improve flow into production?"

    Adopt approaches that improve flow of changes into production, that enable refactoring, fast feedback on quality, and bug fixing. These accelerate beneficial changes entering production, limit issues deployed, and enable rapid identification and remediation of issues introduced through deployment activities.

??? question "How do you mitigate deployment risks?"

    Adopt approaches that provide fast feedback on quality and enable rapid recovery from changes that do not have desired outcomes. Using these practices mitigates the impact of issues introduced through the deployment of changes.

??? question "How do you know that you are ready to support a workload?"

    Evaluate the operational readiness of your workload, processes and procedures, and personnel to understand the operational risks related to your workload.

## Design Telemetry
Design your workload so that it provides the information necessary for you to understand its internal state across all components in support of observability and investaging issues.

- **Implement application telemetry:** Instrument your application code to emit information about its internal state, status, and achievement of business outcomes. Use this information to determine when a response is required.
- **Use centralized and structured logging:** Centralized logging helps you search and analyze your serverless application logs. Structured logging makes it easier to derive queries to answer arbitrary questions about the health of your application. As your system grows and more logging is ingested, consider using appropriate logging levels and a sampling mechanism to log a small percentage of logs in DEBUG mode.

## Design for Operations
Adopt approaches that improve the flow of changes into production and that enable refactoring, fast feedback on quality, and bug fixing. These accelerated beneficial changes entering production, limit issues deployed, and enable rapid identification and remediation of issues introduced through deployment activities.

In AWS, you can view your entire workload (applications, infrastructure, policy, governance, and operations) as code. It can all be defined in and updated using code. **This means you can apply the same engineering discipline that you use for application code to every element of your stack.**

## Mitigate Deployment Risks
Adopt approaches that provide fast feedback on quality and enable rapid recovery from changes that do not have desired outcomes. Using these practices mitigates the impact of issues introduced through the deployment of changes.

The design of your workload should include how it will be deployed, updated, operated. You will want to implement engineering practices that align with defect reduction and quick and safe fixed.


## Operational Readiness and Change Management
Evaluate the operational readiness of your workload, processes, procedures and personnel to understand the operational risks related to your workload. Manage the flow of change into your enviroments.

You should use a consistent process (including manual or automated checklists) to know when you are ready to go live with your workload or a change. This will also enable you to find any areas that you need to make plans to address. You will have runbooks that document your routine activities and playbooks that guide your processes for issue resolution. Use a mechanism to manage changes that supports the delivery of business value and help mitigate risks associated to change.

<a href="https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/prepare.html">![aws-logo](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)</a>