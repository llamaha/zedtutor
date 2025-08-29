# Lesson 25: AI Features

Harness the power of AI to accelerate your coding. Learn to use Zed's integrated AI features for code generation, assistance, and productivity.

## 🎯 Learning Objectives

By the end of this lesson, you will:
- Configure AI providers
- Use inline AI assistance
- Work with the Agent Panel
- Create AI rules and workflows
- Understand privacy and security

## 📚 AI Features Overview

Zed's AI capabilities:
- **Inline Assistance**: Code completion and generation
- **Agent Panel**: Interactive AI chat
- **Multiple Providers**: Claude, GPT, local models
- **Context Awareness**: Project understanding
- **Privacy Controls**: Your data, your choice

## 🏃 Exercise 1: Setting Up AI

Configure AI features:

1. **Open AI settings:**
   - Command Palette → "assistant: toggle focus"
   - First-time setup
   - Provider selection
   - API key configuration

2. **Available providers:**
   - Claude (Anthropic)
   - OpenAI GPT
   - Local models (Ollama)
   - Custom endpoints

3. **Configuration example:**
   ```json
   {
     "assistant": {
       "default_model": "claude-3-sonnet",
       "provider": "anthropic"
     }
   }
   ```

4. **Privacy settings:**
   - Data handling
   - Telemetry options
   - Local vs cloud
   - Security choices

## 🏃 Exercise 2: Inline AI Assistance

Use AI directly in editor:

1. **Trigger inline assist:**
   - Select code
   - Command Palette → "assistant: inline assist"
   - Type your request
   - AI modifies selection

2. **Common requests:**
   - "Add error handling"
   - "Convert to async/await"
   - "Add JSDoc comments"
   - "Optimize this function"

3. **Code generation:**
   - Write comment description
   - Trigger inline assist
   - "Implement this function"
   - Review and accept

4. **Multi-line operations:**
   - Select entire functions
   - Complex refactoring
   - Batch operations
   - Smart transformations

## 🏃 Exercise 3: Agent Panel

Interactive AI conversations:

1. **Open Agent Panel:**
   - Command Palette → "assistant: toggle focus"
   - Dock position
   - Conversation interface
   - Context awareness

2. **Effective prompts:**
   - Be specific
   - Provide context
   - Ask for explanations
   - Request alternatives

3. **Code discussions:**
   - Paste code snippets
   - Ask for reviews
   - Debug assistance
   - Architecture advice

4. **Learning mode:**
   - Concept explanations
   - Best practices
   - Language features
   - Framework guidance

## 🏃 Exercise 4: AI Rules and Context

Configure AI behavior:

1. **Create AI rules:**
   - `.zed/ai/rules.md`
   - Project-specific instructions
   - Coding standards
   - Preferences

2. **Rule examples:**
   ```markdown
   # AI Rules
   - Use TypeScript with strict mode
   - Prefer functional programming
   - Include comprehensive error handling
   - Follow project ESLint rules
   ```

3. **Context management:**
   - Include files
   - Reference documentation
   - Project structure
   - Dependencies

4. **Custom instructions:**
   - Language preferences
   - Framework versions
   - Style guidelines
   - Security requirements

## 🏃 Exercise 5: Advanced AI Workflows

Power user techniques:

1. **Test generation:**
   - Select function
   - "Generate unit tests"
   - Review test cases
   - Run and verify

2. **Documentation:**
   - Select code
   - "Add comprehensive docs"
   - API documentation
   - Usage examples

3. **Refactoring assistant:**
   - Complex refactors
   - Pattern application
   - Code modernization
   - Performance optimization

4. **Code review:**
   - Paste PR changes
   - Request review
   - Security analysis
   - Best practice check

## 💡 Pro Tips

- **Context Matters**: Provide clear context for better results
- **Iterate**: Refine prompts for better output
- **Verify**: Always review AI suggestions
- **Learn**: Use AI to learn new patterns
- **Privacy**: Understand what data is sent

## ✅ Lesson Summary

You've learned:
- AI provider configuration
- Inline assistance usage
- Agent Panel interactions
- AI rules and context
- Advanced AI workflows

## 🎯 Practice Challenge

Complete these AI-assisted tasks:
1. Use inline AI to add error handling to a function
2. Generate documentation for a class
3. Create unit tests with AI help
4. Refactor code using AI suggestions
5. Set up project-specific AI rules

Compare your productivity with and without AI!

## 📝 Notes Section

```
AI assistance insights...




```

---

AI mastery unlocked! Continue to `lessons/08_advanced/26_remote_development.md`