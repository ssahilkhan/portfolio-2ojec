# Project inventory

Audit of what the portfolio shows, checked against GitHub (`ssahilkhan`) and the live sites in
November 2026. `src/data/projects.ts` is built from this list.

## Live sites (opened and working)

| Project | URL |
|---|---|
| GetITReady | https://toolora-gray.vercel.app |
| CareCompanion | https://health-care-five-rho.vercel.app |
| NextEdu | https://next-edu-beige.vercel.app |
| NewEdu | https://new-edu-version.vercel.app |
| This portfolio | https://ssahil.vercel.app |

## Projects

| Project | Category | Status | Code |
|---|---|---|---|
| AutoArchAI | Full Stack, AI/ML | Active | Private repo |
| Q-Guardian | AI/ML, Quantum | Active | Private team repo |
| AI Notes Maker | AI/ML | Active | AI_Notes_Maker_nvidia |
| BlockMind | Blockchain, AI/ML | In progress | blockMind |
| GetITReady | Creative Technology, Full Stack | Live | Private repo (toolora) |
| Nemotron streaming STT | AI/ML | Prototype | nemotron-stt-demo |
| Clinical speech-to-record pipeline | AI/ML | Company work | DeepInfinity.ai, not public |
| Radiology reporting assistant | AI/ML, Full Stack | Prototype | Private repo |
| Medical ASR desktop tool | AI/ML | In progress | Private repo (nemotron-asr) |
| Aura personal assistant | AI/ML | Prototype | personal-ai |
| MoneyLens | Full Stack, AI/ML | In progress | moneylens |
| QuantumDev Studio | Quantum, Creative Technology | In progress | quantumdev-studio |
| Quantum Job Tracker Dashboard | Quantum | Prototype | Hackathon code, not public |
| Qiskit experiments | Quantum | Prototype | Quantum_Qiskit |
| College inquiry chatbot | AI/ML | Prototype | college-chat-bot |
| Computer vision and ML experiments | AI/ML | Prototype | ML_Projects |
| AI Document Reader | AI/ML | In progress | AI-Document-Reader |
| Voiceover chatbot | AI/ML | Prototype | ai-voiceover-chatbot |
| Market Place Workers | Full Stack | Prototype | market-place-workers |
| CareCompanion | Full Stack | Live | HealthCare |
| NextEdu | Full Stack | Live | NextEdu |
| NewEdu | Full Stack | Live | NewEduVersion |
| RankWars | Full Stack, Creative Technology | Prototype | rankwars |
| AI Job Analyzer | AI/ML | Prototype | n8n workflow, not public |
| This portfolio | Creative Technology | Live | portfolio-2ojec |

## Repos on the profile that are not Sahil's work

Forks or copies of other people's projects. They are hidden from GitHub Activity and never listed
as projects: `openclaw`, `SuperAGI`, `Vision-Agents`, `deep-research-from-scratch`, `superexpert-ai`.

## Claims that still need checking

These sit in `src/data/portfolio.ts` and feed the inner pages. They were not confirmed by any repo,
deployment or document, so they should be fixed or removed before anyone relies on them.

- **Testimonials** (`testimonials`): no source found for the quotes or the people. Treat as unverified.
- **Blog posts** (`blogPosts`): no published posts found. Treat as unverified.
- **EduCycle**: "500+ active users in first month" and "reducing load time by 40%" have no evidence. These also appear in the skill journeys.
- **College chatbot**: listed as Dialogflow CX + Firebase, but the repo is a Flask app using LlamaCloud. `projects.ts` already describes it correctly.
- **Face detection**: listed as MTCNN with 94% accuracy, but the repo uses Haar cascades and an OpenCV DNN SSD model, with no accuracy figure. `projects.ts` already describes it correctly. "MTCNN" and "Dialogflow" also appear in the skills lists.

The testimonials and blog pages are left out of the sitemap until this is resolved.
