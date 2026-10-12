export interface Course {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  year: string;
  modules: number;
  level: string;
  status: 'Live' | 'In Progress';
  icon: string;
  color: string;
  description: string;
  slug: string;
}

export interface Topic {
  id: string;
  title: string;
  count: string;
  category: 'Developer' | 'Admin' | 'AI & Agentforce' | 'Architecture' | 'Clouds' | 'Company Wise';
  icon: string;
  badge?: string;
  slug: string;
}

export interface Question {
  id: string;
  topicId: string;
  topicName: string;
  question: string;
  level: 'Fresher (0-2Y)' | 'Intermediate (2-5Y)' | 'Advanced (5+Y)';
  company?: string;
  oneLiner: string;
  answer: string;
  codeSnippet?: {
    language: 'apex' | 'javascript' | 'html';
    code: string;
  };
  keyTakeaways: string[];
}

export interface MCQ {
  id: string;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const SF_COURSES: Course[] = [
  {
    id: 'c-admin',
    title: 'Salesforce Admin Zero to Hero',
    subtitle: 'Complete 6-phase path from setup basics to advanced automation, security & reporting',
    badge: 'Popular',
    year: '2026',
    modules: 25,
    level: 'Zero–Adv',
    status: 'Live',
    icon: '🛡️',
    color: 'from-blue-600 to-indigo-700',
    description: 'Everything an Admin needs structured module-by-module, covering Record-Triggered Flows, Sharing Architecture, and Security.',
    slug: 'salesforce-admin-zero-to-hero',
  },
  {
    id: 'c-agentforce',
    title: 'Salesforce Agentforce & AI',
    subtitle: 'Build a real AI agent from scratch. TIA Framework, Apex Actions, Data Cloud RAG',
    badge: 'Hot • 2026',
    year: '2026',
    modules: 15,
    level: 'Intermediate–Adv',
    status: 'Live',
    icon: '🤖',
    color: 'from-purple-600 to-violet-800',
    description: 'Learn Agent Actions, Grounding, Prompt Templates, and how Agentforce executes autonomous reasoning loops in Salesforce.',
    slug: 'salesforce-agentforce-course',
  },
  {
    id: 'c-lwc',
    title: 'LWC Zero to Hero',
    subtitle: 'The most practical LWC course online — every concept tied to real bugs and patterns',
    badge: 'Core Dev',
    year: '2026',
    modules: 15,
    level: 'Zero–Adv',
    status: 'Live',
    icon: '💻',
    color: 'from-cyan-600 to-blue-700',
    description: 'Wire adapters, imperative Apex, Lightning Message Service (LMS), custom events, memory leaks, and DOM manipulation rules.',
    slug: 'lwc-zero-to-hero',
  },
  {
    id: 'c-datacloud',
    title: 'Salesforce Data Cloud',
    subtitle: 'Architecture, Identity Resolution and Agentforce integration in one guide',
    badge: 'High Demand',
    year: '2026',
    modules: 15,
    level: 'Intermediate',
    status: 'Live',
    icon: '☁️',
    color: 'from-sky-500 to-blue-600',
    description: 'Master DMO, DLO, Calculated Insights, Streaming Ingestion, and Vector Databases for AI retrieval.',
    slug: 'salesforce-data-cloud',
  },
  {
    id: 'c-headless',
    title: 'Salesforce Headless 360',
    subtitle: 'Claude + MCP • Agent Actions & Skills to build AI-powered apps from scratch',
    badge: 'Cutting Edge',
    year: '2026',
    modules: 15,
    level: 'Zero–Adv',
    status: 'Live',
    icon: '🧠',
    color: 'from-amber-600 to-orange-700',
    description: 'Building composable Salesforce solutions with modern Next.js frontends, MCP tools, and serverless backends.',
    slug: 'salesforce-headless-360',
  },
  {
    id: 'c-ba',
    title: 'Business Analyst Zero to Hero',
    subtitle: 'Practical Salesforce BA course tied to one continuous XYZ Company project',
    badge: 'Career Shift',
    year: '2026',
    modules: 15,
    level: 'Zero–Adv',
    status: 'Live',
    icon: '📋',
    color: 'from-emerald-600 to-teal-700',
    description: 'User story writing, agile sprint grooming, process mapping, and stakeholder sign-off templates.',
    slug: 'business-analyst-zero-to-hero',
  },
  {
    id: 'c-devops',
    title: 'Salesforce DevOps & CI/CD',
    subtitle: 'Change Sets, SFDX, CI/CD, Scratch Orgs, GitHub Actions — build a real pipeline',
    badge: 'Industry Must',
    year: '2026',
    modules: 15,
    level: 'Intermediate',
    status: 'In Progress',
    icon: '⚙️',
    color: 'from-slate-700 to-gray-900',
    description: 'Modern deployment engineering: Git branch strategies, automated delta deployments, SonarQube, and automated PMD scans.',
    slug: 'salesforce-devops',
  },
];

export const SF_TOPICS: Topic[] = [
  { id: 't-most-asked', title: '31 Most Asked Questions, Ranked', count: '31 Q&A', category: 'Developer', icon: '🔥', badge: 'High Priority', slug: '31-most-asked-questions' },
  { id: 't-product-comp', title: 'Product Companies (Amazon, Google, MS)', count: '45 Q&A', category: 'Company Wise', icon: '🏢', badge: 'Tier 1', slug: 'product-companies-interview' },
  { id: 't-company-wise', title: 'Service MNCs (Deloitte, Accenture, TCS)', count: '80 Q&A', category: 'Company Wise', icon: '🏗️', slug: 'service-companies-interview' },
  { id: 't-apex-triggers', title: 'Apex Triggers & Frameworks', count: '65 Q&A', category: 'Developer', icon: '⚙️', slug: 'apex-triggers' },
  { id: 't-lwc', title: 'Lightning Web Components (LWC)', count: '90 Q&A', category: 'Developer', icon: '💻', slug: 'lightning-web-components' },
  { id: 't-async-apex', title: 'Async Apex (Batch, Queueable, Future)', count: '48 Q&A', category: 'Developer', icon: '⚡', slug: 'async-apex' },
  { id: 't-integration', title: 'REST / SOAP & Webhook Integrations', count: '55 Q&A', category: 'Developer', icon: '🔗', slug: 'salesforce-integrations' },
  { id: 't-flows', title: 'Flows & Advanced Automations', count: '60 Q&A', category: 'Admin', icon: '🔄', slug: 'flows-and-automation' },
  { id: 't-sharing', title: 'Record Sharing & Security Architecture', count: '40 Q&A', category: 'Admin', icon: '🔒', slug: 'record-sharing-security' },
  { id: 't-soql', title: 'SOQL, SOSL & Index Tuning', count: '50 Q&A', category: 'Developer', icon: '🛠️', slug: 'soql-tuning' },
  { id: 't-agentforce', title: 'Agentforce & Generative AI Actions', count: '42 Q&A', category: 'AI & Agentforce', icon: '🤖', badge: 'New 2026', slug: 'agentforce-ai-questions' },
  { id: 't-data-cloud', title: 'Data Cloud & Calculated Insights', count: '38 Q&A', category: 'Clouds', icon: '☁️', slug: 'data-cloud-questions' },
  { id: 't-scenario-100', title: '100 Real-Time Scenario Questions', count: '100 Q&A', category: 'Developer', icon: '🎯', badge: 'Interview Gold', slug: '100-scenario-questions' },
  { id: 't-advanced-150', title: '150 Advanced Architect Questions', count: '150 Q&A', category: 'Architecture', icon: '🏆', slug: '150-advanced-questions' },
  { id: 't-fsl', title: 'Field Service Lightning (FSL)', count: '32 Q&A', category: 'Clouds', icon: '🔧', slug: 'field-service-lightning' },
  { id: 't-omnistudio', title: 'OmniStudio & FlexCards', count: '35 Q&A', category: 'Developer', icon: '⚙️', slug: 'omnistudio' },
  { id: 't-reports', title: 'Reports, Dashboards & Bucket Fields', count: '28 Q&A', category: 'Admin', icon: '📊', slug: 'reports-and-dashboards' },
  { id: 't-cpq', title: 'Salesforce CPQ & Pricing Engines', count: '45 Q&A', category: 'Clouds', icon: '💵', slug: 'salesforce-cpq' },
  { id: 't-service-cloud', title: 'Service Cloud & Omni-Channel', count: '36 Q&A', category: 'Clouds', icon: '🎧', slug: 'service-cloud' },
  { id: 't-sales-cloud', title: 'Sales Cloud & Opportunity Splits', count: '30 Q&A', category: 'Clouds', icon: '💼', slug: 'sales-cloud' },
  { id: 't-marketing-cloud', title: 'Marketing Cloud (SFMC & Journey Builder)', count: '40 Q&A', category: 'Clouds', icon: '📧', slug: 'marketing-cloud' },
  { id: 't-copado', title: 'Copado & Salesforce DevOps', count: '25 Q&A', category: 'Architecture', icon: '🌊', slug: 'copado-devops' },
  { id: 't-managerial', title: 'Techno-Managerial & Behavioral', count: '35 Q&A', category: 'Company Wise', icon: '🤝', slug: 'techno-managerial' },
  { id: 't-release-summer', title: "Summer '26 Platform Release Breakdown", count: 'Guide', category: 'Developer', icon: '☁️', slug: 'summer-26-release' },
];

// =========================================================================
// 💡 HOW TO ADD A NEW QUESTION FROM LINKEDIN IN 60 SECONDS:
// Simply copy and paste an object into this SF_QUESTIONS array:
//
// {
//   id: 'q-deloitte-new',
//   topicId: 't-apex-triggers',
//   topicName: 'Apex Triggers',
//   level: 'Intermediate (2-5Y)',
//   company: 'Deloitte (Asked Yesterday on LinkedIn)',
//   question: 'Your question here...',
//   oneLiner: 'Quick 30-sec interview summary...',
//   answer: 'Detailed explanation...',
//   codeSnippet: { language: 'apex', code: 'public class Demo { ... }' },
//   keyTakeaways: ['Point 1', 'Point 2']
// },
// =========================================================================
export const SF_QUESTIONS: Question[] = [
  {
    id: 'q-1',
    topicId: 't-apex-triggers',
    topicName: 'Apex Triggers',
    level: 'Intermediate (2-5Y)',
    company: 'Deloitte / Accenture',
    question: 'How do you prevent Trigger recursion when updating child or related records in after update?',
    oneLiner: 'Use a Static Boolean flag or a Static Set<Id> in a Trigger Handler utility class to prevent duplicate execution within the same execution context.',
    answer: `When a trigger fires an update on records that re-triggers the same trigger, an infinite loop will hit the 16-level trigger recursion Governor Limit (System.LimitException: Maximum trigger depth exceeded).
    
Best practice is to maintain a static Set<Id> of already processed record IDs inside the Trigger Handler. Since static variables persist throughout the same Apex execution transaction, checking 'if (!processedIds.contains(rec.Id))' ensures each record is only processed once.`,
    codeSnippet: {
      language: 'apex',
      code: `public class AccountTriggerHandler {
    // Static set persists throughout the single transaction
    public static Set<Id> processedAccountIds = new Set<Id>();

    public static void handleAfterUpdate(List<Account> newAccounts) {
        List<Contact> contactsToUpdate = new List<Contact>();
        for (Account acc : newAccounts) {
            if (!processedAccountIds.contains(acc.Id)) {
                processedAccountIds.add(acc.Id);
                // Execute business logic safely without recursive loop
            }
        }
    }
}`,
    },
    keyTakeaways: [
      'Static variables in Apex are transaction-scoped, not user-session scoped.',
      'Always prefer Set<Id> over a simple boolean if batch bulk operations process chunks of 200 records.',
      'Never execute SOQL or DML inside for loops in trigger handlers.',
    ],
  },
  {
    id: 'q-2',
    topicId: 't-lwc',
    topicName: 'LWC',
    level: 'Intermediate (2-5Y)',
    company: 'Salesforce / Google',
    question: 'What is the exact execution lifecycle order of Lightning Web Components, and when should you avoid modifying reactive properties?',
    oneLiner: 'constructor() -> connectedCallback() -> renderedCallback() -> disconnectedCallback() / errorCallback(). Never change tracked properties in renderedCallback without guards to avoid infinite re-render loops!',
    answer: `1. **constructor()**: Initializes the component. Flow: Parent to child. You cannot inspect child elements or access attributes here.
2. **connectedCallback()**: Invoked when component is inserted into the DOM. Ideal for subscribing to LMS, fetching initial data, or establishing event listeners.
3. **renderedCallback()**: Called after every render and re-render. Flow: Child to parent.
⚠️ **CRITICAL WARNING**: Modifying a property that affects the template inside renderedCallback() triggers an infinite re-render loop! Always guard mutations with a boolean flag (e.g. 'if (!this.hasRendered) { ... }').
4. **disconnectedCallback()**: Invoked when removed from DOM. Use for unsubscribing from LMS/MessageChannels to prevent memory leaks.`,
    codeSnippet: {
      language: 'javascript',
      code: `import { LightningElement } from 'lwc';

export default class LifecycleDemo extends LightningElement {
    hasInitialized = false;

    connectedCallback() {
        // Safe place to trigger initial actions
        console.log('Connected to DOM');
    }

    renderedCallback() {
        if (this.hasInitialized) return; // Prevents infinite loop!
        this.hasInitialized = true;
        
        // Safe one-time DOM modification
    }
}`,
    },
    keyTakeaways: [
      'Parent constructor fires BEFORE child constructor.',
      'Child renderedCallback fires BEFORE parent renderedCallback.',
      'Never mutate reactive state in renderedCallback without exit conditions.',
    ],
  },
  {
    id: 'q-3',
    topicId: 't-async-apex',
    topicName: 'Async Apex',
    level: 'Advanced (5+Y)',
    company: 'Amazon / Cognizant',
    question: 'When would you choose Queueable Apex over Batch Apex, and how do you chain Queueable jobs in Summer \'26?',
    oneLiner: 'Use Queueable for sequential async jobs, external callouts with complex state objects, and when processing under 50,000 records. Queueable supports chaining directly via System.enqueueJob().',
    answer: `While Batch Apex is specifically architected for large volume data processing (up to 50M records with Database.QueryLocator in 200-size chunks), **Queueable Apex** offers significant advantages:
1. Accepts non-primitive data types (Objects, SObjects, complex DTOs) in constructor parameters.
2. Supports external HTTP Callouts by implementing 'Database.AllowsCallouts'.
3. Enables linear job chaining: From within the 'execute' method of a Queueable class, you can enqueue another Queueable job, creating an ordered workflow without scheduled timers.`,
    codeSnippet: {
      language: 'apex',
      code: `public class SyncERPQueueable implements Queueable, Database.AllowsCallouts {
    private List<Id> accountIds;

    public SyncERPQueueable(List<Id> accountIds) {
        this.accountIds = accountIds;
    }

    public void execute(QueueableContext context) {
        // 1. Perform external HTTP REST callout
        ERPService.syncAccounts(this.accountIds);

        // 2. Chain next step in pipeline if needed
        if (!Test.isRunningTest()) {
            System.enqueueJob(new NotifyAdminsQueueable('ERP Sync Completed'));
        }
    }
}`,
    },
    keyTakeaways: [
      'Maximum 50 Queueable jobs can be enqueued in a single synchronous Apex transaction.',
      'In developer edition/scratch orgs, chaining depth is limited, but in production unlimited chaining is allowed.',
      'Use Queueable when you need async processing without the overhead of Batch Apex start/execute/finish ceremonies.',
    ],
  },
  {
    id: 'q-4',
    topicId: 't-agentforce',
    topicName: 'Agentforce & AI',
    level: 'Advanced (5+Y)',
    company: 'Salesforce / TCS',
    question: 'How does Agentforce ground LLM prompts using Data Cloud RAG and Apex Invocable Actions?',
    oneLiner: 'Agentforce grounds prompts by retrieving contextual CRM & Data Cloud vectors (RAG), and executes autonomous actions via Invocable Apex annotated with @InvocableMethod.',
    answer: `In Salesforce Agentforce:
1. **Trust Layer & Grounding**: When a user gives an instruction to an Agent, Agentforce uses the **TIA (Topic-Instruction-Action) Framework**. It queries Salesforce Data Cloud vector search (RAG) to ground the user prompt with exact real-time customer data, order history, and knowledge articles.
2. **Action Invocation**: Instead of generating random text, the Agent reasons what action to perform. It invokes structured **Apex Invocable Methods** decorated with descriptive '@InvocableMethod' labels, parameters, and return outputs.
3. **Auditability**: Every prompt and response is checked by Einstein Trust Layer for PII masking, toxicity detection, and zero data retention by foundation model providers.`,
    codeSnippet: {
      language: 'apex',
      code: `public with sharing class OrderAgentActions {
    @InvocableMethod(
        label='Get Order Status for Agentforce'
        description='Retrieves live shipping tracking and delivery status given an order number'
    )
    public static List<String> getOrderStatus(List<String> orderNumbers) {
        List<String> results = new List<String>();
        for (String orderNum : orderNumbers) {
            Order ord = [SELECT Status, TrackingNumber__c FROM Order WHERE OrderNumber = :orderNum LIMIT 1];
            results.add('Order status is: ' + ord.Status + ', Tracking: ' + ord.TrackingNumber__c);
        }
        return results;
    }
}`,
    },
    keyTakeaways: [
      'Invocable Methods for Agentforce MUST have clear, detailed human-readable descriptions for the LLM to select them correctly.',
      'Data Cloud provides real-time vector embeddings for Retrieval-Augmented Generation (RAG).',
      'The Einstein Trust Layer guarantees zero data training on external AI servers.',
    ],
  },
];

export const SF_MCQS: MCQ[] = [
  {
    id: 'mcq-1',
    topic: 'Apex & Triggers',
    question: 'What is the maximum number of SOQL queries permitted in a single synchronous Apex execution context?',
    options: ['50', '100', '150', '200'],
    correctIndex: 1,
    explanation: 'Salesforce enforces a Governor Limit of exactly 100 SOQL queries for synchronous transactions and 200 SOQL queries for asynchronous transactions (Batch/Queueable).',
  },
  {
    id: 'mcq-2',
    topic: 'LWC',
    question: 'Which decorator in Lightning Web Components is used to create reactive properties that re-render the template when changed?',
    options: ['@wire', '@api', '@track (or any primitive property)', '@invocable'],
    correctIndex: 2,
    explanation: 'Since Spring \'20, all primitive properties in LWC are reactive by default. For complex objects and arrays where inner properties are mutated, @track is used.',
  },
  {
    id: 'mcq-3',
    topic: 'Security & Sharing',
    question: 'If a class is declared without any sharing keyword (e.g. "public class MyService"), what is the default sharing behavior?',
    options: [
      'It defaults to "with sharing"',
      'It defaults to "without sharing"',
      'It inherits the sharing setting of the calling class, or runs as "without sharing" if called as entry point',
      'It fails compilation',
    ],
    correctIndex: 2,
    explanation: 'In Apex, omitting the sharing keyword causes the class to execute under the context of the caller class. If it is the initial entry point, it executes as without sharing.',
  },
  {
    id: 'mcq-4',
    topic: 'Flows',
    question: 'Which flow type allows you to run fast field updates BEFORE the record is saved to the database without consuming DML limits?',
    options: [
      'Screen Flow',
      'Before-Save Record-Triggered Flow',
      'After-Save Record-Triggered Flow',
      'Schedule-Triggered Flow',
    ],
    correctIndex: 1,
    explanation: 'Before-Save Record-Triggered Flows update fields on the triggering record before database commit. They execute 10X faster than Process Builder or After-Save flows without consuming DML statements.',
  },
];
