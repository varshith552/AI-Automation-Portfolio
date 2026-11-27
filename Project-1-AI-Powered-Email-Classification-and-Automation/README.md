# AI-Powered Email Classification and Automation System

## Project Overview

An AI-powered email management system that automatically classifies incoming Gmail messages into four categories using a locally running Large Language Model (LLM).

The system integrates Gmail, n8n, Ollama, and Qwen 2.5 3B to understand email content, validate classification results, and automatically organize emails using Gmail labels.

## Problem Statement

Managing a large volume of emails manually is time-consuming. Important job opportunities and interview invitations can easily get buried among promotional and general emails.

Traditional keyword-based filtering may also misclassify emails because it does not always understand their context.

This project addresses the problem through AI-based email classification and automated Gmail label management.

## Project Objectives

- Automatically detect incoming Gmail messages.
- Understand email content using an LLM.
- Classify emails into four predefined categories.
- Validate AI-generated classifications using JavaScript.
- Automatically organize emails using Gmail labels.
- Reduce repetitive manual email management.

## Email Categories

| Category | Description |
|---|---|
| JOB_OPPORTUNITY | Job-related emails and opportunities |
| INTERVIEW | Interview invitations and related communication |
| PROMOTIONAL | Marketing and promotional emails |
| GENERAL | Other emails, including general communication |

## Technology Stack

| Technology | Purpose |
|---|---|
| Gmail | Email source and label management |
| n8n | Workflow automation and orchestration |
| Ollama | Local LLM execution |
| Qwen 2.5 3B | Email understanding and classification |
| JavaScript | Classification validation |
| HTTP REST API | Communication with Ollama |
| JSON | Structured data exchange |

## Workflow Architecture

1. **Gmail Trigger:** Detects incoming emails.
2. **Prepare Gmail Email:** Extracts relevant email information.
3. **HTTP Request:** Sends email content to the local Ollama API.
4. **Merge:** Combines the AI response with the original email data.
5. **Edit Fields:** Extracts the predicted category and reason.
6. **JavaScript Validation:** Checks and corrects classification results using predefined validation rules.
7. **Switch Node:** Routes emails according to their final category.
8. **Gmail Label Management:** Removes previous AI classification labels and applies the appropriate label.

## Classification Labels

- AI/Job Opportunity
- AI/Interview
- AI/Promotional
- AI/General

## Key Features

- Automated Gmail email detection.
- Local LLM-based classification.
- Context-aware email understanding.
- JavaScript-based validation.
- Automated category-based routing.
- Gmail label management.
- No dependency on paid cloud LLM APIs for classification.

## Testing and Validation

Approximately 25 manually prepared email examples were used during development.

Testing identified classification issues involving ambiguous emails, including interview-preparation promotions and receipts. Additional JavaScript validation rules were introduced to address these cases.

A final representative test set containing one email from each of the four categories was successfully classified and labeled.

A statistically measured classification accuracy score was not established.

## Project Outcome

Successfully developed an end-to-end AI-powered email classification and automation workflow that combines local LLM inference, JavaScript validation, and Gmail automation.

## Documentation

The detailed project report will be available in the `documentation` folder.

## Author

**A. Varshith**
