export type FalconModule = {
  name: string;
  description: string;
};

export type ModuleCategory = {
  id: string;
  name: string;
  modules: readonly FalconModule[];
};

export const moduleCategories = [
  {
    id: "endpoint-security-xdr",
    name: "Endpoint Security & XDR",
    modules: [
      { name: "Falcon Prevent", description: "Next-gen antivirus that stops malware, ransomware, and fileless attacks with on-sensor AI." },
      { name: "Falcon Insight XDR", description: "Industry-leading EDR/XDR: detection, investigation, and response across endpoint, identity, cloud, and more." },
      { name: "Falcon Device Control", description: "Granular control and visibility over USB and peripheral device usage." },
      { name: "Falcon Firewall Management", description: "Centralized host-based firewall policy management from the Falcon console." },
      { name: "Falcon Forensics", description: "At-scale forensic data collection for incident response and threat hunting." },
      { name: "Falcon for Mobile", description: "EDR for iOS and Android that detects threats without draining devices." },
      { name: "Falcon for XIoT", description: "Protection and visibility for IoT, OT, and connected medical/industrial devices." },
    ],
  },
  {
    id: "identity-protection",
    name: "Identity Protection",
    modules: [
      { name: "Falcon Identity Threat Detection", description: "Real-time visibility into identity risk across AD and Entra ID, surfacing attack paths and exposures." },
      { name: "Falcon Identity Threat Protection", description: "Blocks credential theft, lateral movement, and privilege escalation with risk-based conditional access and MFA enforcement." },
      { name: "Falcon Privileged Access", description: "Just-in-time, least-privilege access controls for high-risk accounts and sessions." },
    ],
  },
  {
    id: "cloud-security",
    name: "Cloud Security",
    modules: [
      { name: "Cloud Security Posture Management (CSPM)", description: "Continuous detection and remediation of cloud misconfigurations across AWS, Azure, and GCP." },
      { name: "Cloud Workload Protection (CWP)", description: "Runtime protection for hosts, containers, and Kubernetes wherever they run." },
      { name: "Cloud Infrastructure Entitlement Management (CIEM)", description: "Enforces least privilege across cloud identities and entitlements." },
      { name: "Application Security Posture Management (ASPM)", description: "Traces risk from code to cloud to prioritize what actually matters." },
      { name: "Data Security Posture Management (DSPM)", description: "Discovers and protects sensitive data across cloud and SaaS." },
    ],
  },
  {
    id: "next-gen-siem-soc",
    name: "Next-Gen SIEM & SOC",
    modules: [
      { name: "Falcon Next-Gen SIEM", description: "Petabyte-scale, AI-native SIEM that unifies all data and correlates it into single incidents in seconds." },
      { name: "Falcon LogScale", description: "Blazing-fast, cost-efficient log management and observability at any scale." },
      { name: "Falcon Fusion SOAR", description: "Built-in orchestration and automation to codify and accelerate response workflows." },
    ],
  },
  {
    id: "threat-intelligence",
    name: "Threat Intelligence",
    modules: [
      { name: "Falcon Adversary Intelligence", description: "Automated, actionable intel on the adversaries targeting your industry and stack." },
      { name: "Falcon Adversary OverWatch", description: "Elite, intel-led managed threat hunting across endpoint, identity, and cloud, 24/7." },
      { name: "Falcon Intelligence Recon", description: "Monitors the deep and dark web for exposed credentials, brand abuse, and emerging threats." },
    ],
  },
  {
    id: "exposure-management",
    name: "Exposure Management",
    modules: [
      { name: "Falcon Exposure Management", description: "Unifies asset, vulnerability, and attack-surface risk into one prioritized view." },
      { name: "Falcon Spotlight", description: "Scanless, real-time vulnerability management built into the Falcon sensor." },
      { name: "Falcon Surface", description: "External attack surface management that finds and prioritizes internet-exposed risk." },
      { name: "Falcon Discover", description: "Continuous IT hygiene: discover unmanaged assets, accounts, and applications." },
    ],
  },
  {
    id: "ai-data-protection",
    name: "AI & Data Protection",
    modules: [
      { name: "Charlotte AI", description: "Agentic AI SOC analyst that triages detections, investigates, and drafts response in seconds." },
      { name: "AI Detection & Response (AIDR)", description: "Secures models, agents, and GenAI apps; discovers shadow AI and blocks prompt injection and data exfiltration." },
      { name: "Falcon Data Protection", description: "Modern DLP on the Falcon agent that stops data theft across web, endpoint, and GenAI." },
    ],
  },
  {
    id: "managed-services",
    name: "Managed Services",
    modules: [
      { name: "Falcon Complete MDR", description: "Fully managed 24/7 detection, hunting, and response run by CrowdStrike experts as an extension of your team." },
      { name: "Falcon Complete Next-Gen SIEM", description: "Managed operation and tuning of Next-Gen SIEM, run for you around the clock." },
      { name: "CrowdStrike Services", description: "Incident response and proactive services to prepare for, respond to, and recover from breaches." },
    ],
  },
  {
    id: "saas-security",
    name: "SaaS Security",
    modules: [
      { name: "Falcon Shield", description: "SaaS security posture management (SSPM) that secures identities, configs, and data across your SaaS estate." },
    ],
  },
] as const satisfies readonly ModuleCategory[];
