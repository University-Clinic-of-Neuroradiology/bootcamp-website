---
layout: page
title: Theoretical Basics
subtitle: Prompt Engineering
---

## 📋 Content
- [📋 Content](#-content)
- [What is Prompt Engineering?](#what-is-prompt-engineering)
- [Importance of Prompt Engineering](#importance-of-prompt-engineering)
  - [Enhancing accuracy](#enhancing-accuracy)
  - [Unlocking Versatility](#unlocking-versatility)
  - [Improving Efficiency](#improving-efficiency)
  - [Enabling Creativity and Exploration](#enabling-creativity-and-exploration)
  - [Mitigating Model Limitations](#mitigating-model-limitations)
  - [Bridging the Knowledge Gap](#bridging-the-knowledge-gap)
  - [Summary](#summary)
- [Anatomy of an Effective Prompt](#anatomy-of-an-effective-prompt)
- [Elements of a Prompt](#elements-of-a-prompt)
- [Types of Prompting](#types-of-prompting)
- [Advanced Prompting Techniques](#advanced-prompting-techniques)
- [Iterative Prompt Refinement](#iterative-prompt-refinement)
- [Structuring Outputs](#structuring-outputs)
- [Handling Model Limitations](#handling-model-limitations)
- [Applications of Prompt Engineering](#applications-of-prompt-engineering)
- [Best Practices](#best-practices)
- [☝️ References](#️-references)


## What is Prompt Engineering?
Prompt engineering is the art and science of designing inputs (prompts) for large language models (LLMs) like ChatGPT to achieve desired outcomes.
It involves crafting instructions that guide the model's behavior effectively.

![Overview Prompt Engineering](../../assets/img/theoretical_basics/overview_prompt_eng.webp)

## Importance of Prompt Engineering
Prompt engineering plays a crucial role in optimizing the performance and applicability of large language models (LLMs) like ChatGPT.
By carefully crafting prompts, users can enhance the model's ability to generate relevant, accurate, and valuable outputs.

### Enhancing accuracy
A well-designed prompt reduces ambiguity and guides the model toward precise answers. For instance, instead of asking,
"Tell me about technology", a prompt like, "Provide a summary of recent advancements in AI technology within the last 5 years,"
narrows the scope, ensuring the response is both relevant and specific.

### Unlocking Versatility
Prompt engineering allows LLMs to adapt to a variety of use cases, including:
- Healthcare: Assisting with patient education by explaining medical conditions.
- Education: Simplifying complex topics for diverse audiences.
- Research: Summarization of research paper.
 
Through tailored prompts, users can harness the model's capabilities for specialized applications.

### Improving Efficiency
Effective prompts save time by eliminating the need for repeated clarification or revision. For example, specifying the desired
format — such as "List the advantages and disadvantages of CT imaging." — helps the model deliver the response
in a usable structure on the first attempt.

### Enabling Creativity and Exploration
With carefully designed open-ended or creative prompts, LLMs can assist healthcare professionals, researchers and educators
in novel ways. Below are some medical-specific examples:
- Medical Case Generation:
  - Prompt: "Create a hypothetical case study involving a patient with symptoms of fatigue, joint pain, and skin rash. Include possible
    differential diagnoses and suggest the most likely condition based on common clinical presentations."
  - Output: A detailed patient scenario exploring conditions like lupus, rheumatoid arthritis, and Lyme disease, leading to a discussion
    on lupus as the primary suspect.
- Innovative Health Solutions:
  - Prompt: "Propose innovative methods to improve medication adherence among elderly patients with chronic diseases."
  - Output: Ideas such as AI-powered pill dispensers, wearable devices that provide reminders, and gamified adherence tracking systems.
- Education and Training:
  - Prompt: "Write a fictional dialogue between a medical student and a senior physician discussing the challenges of diagnosing rare diseases."
  - Output: A teaching conversation that highlights real-world diagnostic dilemmas, such as distinguishing between similar presentations of rare genetic disorders.

These examples demonstrate the versatility of LLMs in supporting creativity and exploration within the medical field, fostering innovation,
education, and patient-centered care.

### Mitigating Model Limitations
LLMs, despite their power, are prone to biases, inaccuracies, and hallucinations. Thoughtfully crafted prompts can:
- Minimize biases by guiding the tone and focus of responses.
- Reduce hallucinations by explicitly requesting fact-based answers.
- Handle sensitive topics with careful framing.

For example, a prompt like, "Discuss the use of AI in healthcare from both the benefits and challenges perspectives." encourages a balanced response.

### Bridging the Knowledge Gap
Prompt engineering ensures that users can maximize the model's capabilities even without technical expertise. By providing clear and specific
instructions, anyone can leverage LLMs to:
- Gain insights on technical topics.
- Generate creative content.
- Simplify complex ideas for different audiences.

### Summary
Prompt engineering is more than just crafting instructions, it is a strategic tool that transforms LLMs into versatile problem solvers.
By enhancing accuracy, enabling creative applications, and improving efficiency, prompt engineering empowers users to extract maximum value
from AI systems in diverse fields.

Through continuous refinement and thoughtful design, prompt engineering ensures that the interaction between humans and AI becomes seamless,
productive, and impactful.


## Anatomy of an Effective Prompt
bla bla

**Summary:**
- Clarity: Reduces ambiguity by providing clear context.
- Specificity: Targets the exact requirement to avoid irrelevant information.
- Open-Endedness: Encourages detailed and insightful outputs​(prompt1)​(prompt2).

## Elements of a Prompt
bla bla

**Summary:**
- Instructions: Define the task clearly (e.g., summarize, translate).
- Context: Provide necessary background for accurate responses.
- Output Format: Specify desired output structure (e.g., lists, tables).
- Persona: Tailor responses to emulate specific roles or tones (e.g., formal, technical)​(prompt2)​(prompts_for_developers3).

## Types of Prompting
bla bla

**Summary:**
1. Zero-Shot Prompting
  - No examples provided.
  - Relies solely on the model's pre-trained knowledge.
  - Example: "Explain what AI is."
2. One-Shot Prompting
  - Includes a single example to guide the model.
  - Example: "Q: What is 2+2? A: 4. Q: What is 3+5? A:"
3. Few-Shot Prompting
  - Provides multiple examples for more complex tasks.
  - Example: Sentiment classification with annotated examples​(prompt3)​(prompts_for_developers2).

## Advanced Prompting Techniques
bla bla

**Summary:**
1. Chain-of-Thought (CoT) Prompting
  - Encourages step-by-step reasoning before answering.
  - Example: "Let’s think step by step: [detailed reasoning]."
2. Multi-Step Prompting
  - Breaks complex tasks into sequential steps for clarity.
  - Example: Writing a blog post with separate steps for introduction, content, and conclusion​(prompt3)​(prompts_for_developers2).
3. Self-Consistency Prompting
  - Generates multiple responses and selects the most consistent output via majority voting​(prompts_for_developers2).

## Iterative Prompt Refinement
bla bla

**Summary:**
Prompts are rarely perfect initially. Refinement involves:
- Building a basic prompt.
- Analyzing the output.
- Revising based on feedback.
- Reiterating for improvement​(prompt3)​(prompts_for_developers2).

## Structuring Outputs
bla bla

**Summary:**
- Tables: Explicitly mention expected columns and rows.
- Lists: Specify ordered or unordered formats.
- Structured Paragraphs: Include headings and subheadings for clarity​(prompts_for_developers1)​(prompts_for_developers3).

## Handling Model Limitations
bla bla

**Summary:**
- Biases: Reflect societal stereotypes or training data biases.
- Hallucinations: Confidently presenting incorrect facts.
- Overfitting: Poor generalization beyond training data​(prompt3).

## Applications of Prompt Engineering
bla bla

**Summary:**
- Text Summarization: Condenses lengthy texts into concise outputs.
- Text Transformation: Adjusts tone, style, or translates content.
- Chatbot Development: Guides chatbots to respond appropriately​(prompts_for_developers3)​(prompts_for_developers4).

## Best Practices
bla bla

**Summary:**
- Use delimiters (--- or """) to separate sections in prompts.
- Specify constraints (e.g., word count, style) for outputs.
- Test prompts with varied examples to ensure robustness​(prompts_for_developers2)​(prompts_for_developers3).

## ☝️ References
Parts of this course were created with the help of ChatGPT (OpenAI). The images were generated with DALL-E (OpenAI).


