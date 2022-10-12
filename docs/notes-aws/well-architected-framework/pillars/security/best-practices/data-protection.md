The following question focuses on these considerations for security.

??? question "How do you classify your data?"
    
    Classification provides a way to categorize data, based on criticality and sensitivity in order to help you determine appropriate protection and retention controls.

??? question "How do you protect your data at rest?"
    
    Protect your data at rest by implementing multiple controls, to reduce the risk of unauthorized access or mishandling.

??? question "How do you protect your data in transit?"

    Protect your data in transit by implementing multiple controls to reduce the risk of unauthorized access or loss.

## Data Classification
Data classification provides a way to categorize organizational data based on criticality and sensitivity in order to help you determine appropriate protection and retention controls.

- **Identify the data within your workload:** You need to understand the type and classification of data your workload is processing, the associated business processes, data owner, applicable legal and compliance requirements, where it’s stored, and the resulting controls that are needed to be enforced.
- **Define data protection controls:** By using resource tags, separate AWS accounts per sensitivity (and potentially also per caveat / enclave / community of interest), IAM policies, Organizations SCPs, AWS KMS, and AWS CloudHSM, you can define and implement your policies for data classification and protection with encryption.
- **Define data lifecycle management:** Your defined lifecycle strategy should be based on sensitivity level as well as legal and organization requirements. Aspects including the duration for which you retain data, data destruction processes, data access management, data transformation, and data sharing should be considered.
- **Automate identification and classification:** Automating the identification and classification of data can help you implement the correct controls. Using automation for this instead of direct access from a person reduces the risk of human error and exposure.

## Protecting Data at Rest
Data at rest represents any data that you persist in non-volatile storage for any duration in your workload. This includes block storage, object storage, databases, archives, IoT devices, and any other storage medium on which data is persisted. Protecting your data at rest reduces the risk of unauthorized access, when encryption and appropriate access controls are implemented.

Encryption and tokenization are two important but distinct data protection schemes.

***Tokenization*** is a process that allows you to define a token to represent an otherwise sensitive piece of information (for example, a token to represent a customer’s credit card number). A token must be meaningless on its own, and must not be derived from the data it is tokenizing–therefore, a cryptographic digest is not usable as a token. By carefully planning your tokenization approach, you can provide additional protection for your content, and you can ensure that you meet your compliance requirements. For example, you can reduce the compliance scope of a credit card processing system if you leverage a token instead of a credit card number.

***Encryption*** is a way of transforming content in a manner that makes it unreadable without a secret key necessary to decrypt the content back into plaintext. Both tokenization and encryption can be used to secure and protect information as appropriate. Further, masking is a technique that allows part of a piece of data to be redacted to a point where the remaining data is not considered sensitive. For example, PCI-DSS allows the last four digits of a card number to be retained outside the compliance scope boundary for indexing.

## Protecting Data in Transit
Data in transit is any data that is sent from one system to another. This includes communication between resources within your workload as well as communication between other services and your end users. By providing the appropriate level of protection for your data in transit, you protect the confidentiality and integrity of your workload’s data.

<a href="https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/data-protection.html">![aws-logo](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)</a>