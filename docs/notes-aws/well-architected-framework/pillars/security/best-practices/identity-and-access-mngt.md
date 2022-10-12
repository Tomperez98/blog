The following question focuses on these considerations for security.

??? question "How do you manage identities for people and machines?"

    There are two types of identities you need to manage when approaching operating secure AWS workloads. Understanding the type of identity you need to manage and grant access helps you ensure the right identities have access to the right resources under the right conditions.

    **Human Identities:** Your administrators, developers, operators, and end users require an identity to access your AWS environments and applications. These are members of your organization, or external users with whom you collaborate, and who interact with your AWS resources via a web browser, client application, or interactive command-line tools.

    **Machine Identities:** Your service applications, operational tools, and workloads require an identity to make requests to AWS services, for example, to read data. These identities include machines running in your AWS environment such as Amazon EC2 instances or AWS Lambda functions. You may also manage machine identities for external parties who need access. Additionally, you may also have machines outside of AWS that need access to your AWS environment.

??? question "How do you manage permissions for people and machines?"

    Manage permissions to control access to people and machine identities that require access to AWS and your workload. Permissions control who can access what, and under what conditions.

## Identity Management
There are two types of identities you need to manage when approaching secure AWS workloads.

- **Human Identities:** The admins, developers, operators, and consumers of your applications require an identity to access your AWS environment and applications. These can be members of your organization, or external users with whom you collaborate, and who interact with your AWS resources via a web browser, client application, mobile app, or interactive command-line tools.
- **Machine Identities:** Your workload applications, operational tools, and components require an identity to make requests to AWS services.

## Permissions Management
Manage permissions to control access to human and machine identities that require access to AWS and your workloads. Permissions control who can access what, and under what conditions. Set permissions to specific human and machine identities to grant access to specific service actions on specific resources. Additionally, specify conditions that must be true for access to be granted.

There are a number of ways to grant access to different types of resources. One way is by using different policy types.

**Managed policies** – Standalone identity-based policies that you can attach to multiple users, groups, and roles in your AWS account. There are two types of managed policies:

- **AWS-managed policies** – Managed policies that are created and managed by AWS.
- **Customer-managed policies** – Managed policies that you create and manage in your AWS account. Customer-managed policies provide more precise control over your policies than AWS-managed policies.

Managed polices are the preferred method for applying permissions. However, you also can use inline policies that you add directly to a single user, group, or role. Inline policies maintain a strict one-to-one relationship between a policy and an identity. Inline policies are deleted when you delete the identity.

In most cases, you should create your own customer-managed policies following the principle of [least privilege](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege).

<a href="https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/identity-and-access-management.html">![aws-logo](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)</a>