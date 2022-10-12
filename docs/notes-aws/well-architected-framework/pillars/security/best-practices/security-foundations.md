The following question focuses on these considerations for security.

??? question "How do you securely operate your workload?"

    To operate your workload securely, you must apply overarching best practices to every area of security. Take requirements and processes that you have defined in operational excellence at an organizational and workload level, and apply them to all areas. Staying up to date with recommendations from AWS, industry sources, and threat intelligence helps you evolve your threat model and control objectives. Automating security processes, testing, and validation allow you to scale your security operations.

## Shared Responsability
- Look at this [link](../../../../shared-responsability-model.md)

## AWS Response to Abuse and Compromise
Abuse activities are observed behaviors of AWS customers' instances or other resources that are malicious, offensive, illegal, or could harm other internet sites. AWS works with you to detect and address suspicious and malicious activities from your AWS resources. Unexpected or suspicious behaviors from your resources can indicate that your AWS resources have been compromised, which signal risks to your business. **Be sure to use best practices when adding contacts, both for security and billing.** Although your root account email is the primary target of communication from AWS, AWS also communicates security issues and billing issues to the secondary email addresses. Adding an email address that goes to only one person means that you have added a single point of failure to your AWS account. Make sure that you’ve added at least one distribution list to your contacts.

## Governance
Achieve risk management by following a layared approach to security control objectives-each layer builds on upon the previous one. Understanding the [AWS Shared Responsability Model](#shared-responsability). This knowledge provides clarity on what you are responsible for on the customer side and what you inherit from AWS.

Meet most of your control objectives at the next layer. This is where the platform-wide capability lives. For example, this layer includes the AWS account vending process, integration with an identity provider such as AWS Single Sign-On (AWS SSO), and the common detective controls. Some of the output of the platform governance process is here too. When you want to start using a new AWS service, update service control policies (SCPs) in the AWS Organizations service to provide the guardrails for initial use of the service. You can use other SCPs to implement common security control objectives, often referred to as security invariants. These are control objectives or configuration that you apply to multiple accounts, organization units, or the whole AWS organization. Typical examples are limiting the Regions that infrastructure runs in or preventing the disabling of detective controls. This middle layer also contains codified policies such as config rules or checks in pipelines.

The top layer is where the product teams meet control objectives. This is because the implementation is done in the applications that the product teams control. This could be implementing input validation in an application or ensuring that identity passes between microservices correctly. Even though the product team owns the configuration, they can still inherit some capability from the middle layer.

The following diagram shows a typical risk matrix. The likelihood is based on frequency of previous occurrences and the consequence is based on the financial, reputational and time cost of the event.

![Risk Level Likelihood Matrix](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/images/risk-matrix.png){ width="500" }

## Operating Your Workloads Securely
Operating workloads securely covers the whole lifecycle of a workload from design, to build, to run, and to ongoing improvement. One of the ways to improve your ability to operate securely in the cloud is by taking and organizational approach to governance. *Governance is a way that decisions are guided consistently without depending solely on the good judgment of the people involved*.

To operate a workload securely, you must apply overarching best practices to every area of security. Take requirements and processes that you have defined in operational excellence at an organizational and workload level, and apply them to all areas. Automating security processes, testing, and validation help you scale your security operations.

Automation allows consistency and repeatability of processes. People are good at many things, but consistently doing the same thing repeatedly without mistakes is not one of them. Even with well-written runbooks, you run the risk that people won’t consistently carry out repetitive tasks. Automation, however, responds to a trigger the same way each time. The best way to deploy applications is through automation. The code that runs the deployment can be tested and then used to perform the deployment. This increases confidence in the change process and reduces the risk of a failed change.

To verify that the configuration meets your control objectives, test the automation and the deployed application in a non-production environment first. This way, you can test the automation to prove that it performed all the steps correctly. You also get early feedback in the development and deployment cycle, reducing rework. To reduce the chance of deployment errors, make configuration changes by code not by people. If you need to re-deploy an application, automation makes this much easier. As you define additional control objectives, you can easily add them to the automation for all workloads.

## AWS Account Management and Separation
We recommend that you organize workloads in separate accounts and group accounts based on function, compliance requirements, or a common set of controls rather than mirroring your organization’s reporting structure. In AWS, accounts are a hard boundary. For example, account-level separation is strongly recommended for isolating production workloads from development and test workloads.

<a href="https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/security.html">![aws-logo](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)</a>