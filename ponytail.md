**Here's a complete markdown file with everything you need to know about Ponytail, including when and how to use it:**

**\`\`\`markdown**  
**\# Ponytail: The Lazy Senior Dev in Your AI Agent**

**\#\# What is Ponytail?**

**Ponytail is a ruleset and plugin system that teaches AI coding assistants (like Claude Code) to write minimal, efficient code by following a strict priority ladder. It's named after that senior developer who's been at the company forever \- the one who says nothing, writes one line, and it just works.**

**\*\*The Philosophy:\*\* Write only what the task needs, never cut corners on validation, error handling, security, or accessibility. The code ends up small because it's necessary, not golfed.**

**\#\# The Priority Ladder**

**Before writing any code, the agent stops at the first rung that holds:**

**\`\`\`**  
**1\. Does this need to exist?   → no: skip it (YAGNI)**  
**2\. Stdlib does it?            → use it**  
**3\. Native platform feature?   → use it**  
**4\. Installed dependency?      → use it**  
**5\. One line?                  → one line**  
**6\. Only then: the minimum that works**  
**\`\`\`**

**\#\# When to Use Ponytail**

**\#\#\# ✅ \*\*Use Ponytail When:\*\***

**| Scenario | Why |**  
**|----------|-----|**  
**| \*\*Building new features\*\* | Prevents over-engineering from the start |**  
**| \*\*Prototyping/MVPs\*\* | Faster development, cleaner code |**  
**| \*\*Production websites\*\* | Less code \= fewer bugs, faster load times |**  
**| \*\*Performance-critical apps\*\* | Eliminates unnecessary bloat |**  
**| \*\*Maintaining existing code\*\* | Keeps things clean and manageable |**  
**| \*\*Code reviews\*\* | Uses \`/ponytail-review\` to catch over-engineering |**  
**| \*\*Team projects\*\* | Enforces a consistent "less is more" philosophy |**  
**| \*\*Learning web development\*\* | Teaches you to use native features first |**  
**| \*\*API cost optimization\*\* | Reduces token usage (if using Claude API) |**

**\#\#\# ❌ \*\*Avoid Ponytail When:\*\***

**| Scenario | Why |**  
**|----------|-----|**  
**| \*\*Complex business logic\*\* | Sometimes you need verbose, explicit code |**  
**| \*\*Learning new libraries\*\* | You need to see the full implementation |**  
**| \*\*POC with new tech\*\* | Need to explore capabilities fully |**  
**| \*\*Legacy codebases\*\* | Must match existing patterns |**  
**| \*\*Teaching others\*\* | Need to show complete examples |**  
**| \*\*Regulated industries\*\* | May require explicit, documented code |**  
**| \*\*AI reasoning models\*\* | Can cost more due to deliberation tokens |**

**\#\#\# ⚠️ \*\*Be Careful With:\*\***

**\- \*\*Niche browser support\*\* \- Native features may not work in old browsers**  
**\- \*\*Complex state management\*\* \- Sometimes a library is actually better**  
**\- \*\*Accessibility requirements\*\* \- Some native features need polyfills**  
**\- \*\*Performance edge cases\*\* \- Always test, don't assume minimal \= fast**

**\#\# Installation**

**\#\#\# Claude Code (Primary)**  
**\`\`\`bash**  
**/plugin marketplace add DietrichGebert/ponytail**  
**/plugin install ponytail@ponytail**  
**\`\`\`**

**\#\#\# Codex**  
**\`\`\`bash**  
**codex plugin marketplace add DietrichGebert/ponytail**  
**codex**  
**\# Then open /plugins, select Ponytail marketplace, install**  
**\# Open /hooks, review and trust two lifecycle hooks**  
**\# Start a new thread**  
**\`\`\`**

**\#\#\# GitHub Copilot CLI**  
**\`\`\`bash**  
**copilot plugin marketplace add DietrichGebert/ponytail**  
**copilot plugin install ponytail@ponytail**  
**\# In interactive session:**  
**/plugin marketplace add DietrichGebert/ponytail**  
**/plugin install ponytail@ponytail**  
**\# Commands are namespaced:**  
**/ponytail:ponytail ultra**  
**/ponytail:ponytail-review**  
**\`\`\`**

**\#\#\# Pi Agent Harness**  
**\`\`\`bash**  
**pi install git:github.com/DietrichGebert/ponytail**  
**\`\`\`**

**\#\#\# OpenCode**  
**\`\`\`bash**  
**\# Run OpenCode from a checkout of the repo**  
**\# Add to opencode.json:**  
**{ "plugin": \["./.opencode/plugins/ponytail.mjs"\] }**  
**\`\`\`**

**\#\#\# Gemini CLI**  
**\`\`\`bash**  
**gemini extensions install https://github.com/DietrichGebert/ponytail**  
**\`\`\`**

**\#\#\# For Other AI Tools (Cursor, Windsurf, Cline, Copilot)**  
**Copy the matching rules file from the repo:**  
**\- \`.cursor/rules/\`**  
**\- \`.windsurf/rules/\`**  
**\- \`.clinerules/\`**  
**\- \`.github/copilot-instructions.md\`**  
**\- \`AGENTS.md\`**  
**\- \`.kiro/steering/\`**

**\#\# Commands**

**| Command | What it does | When to use |**  
**|---------|--------------|-------------|**  
**| \`/ponytail lite\` | More relaxed mode | When you need some flexibility, working with complex requirements |**  
**| \`/ponytail full\` | Default balanced mode | Everyday development |**  
**| \`/ponytail ultra\` | Maximum minimalism | When codebase has become bloated, refactoring |**  
**| \`/ponytail off\` | Disable Ponytail | When you need verbose code for learning/debugging |**  
**| \`/ponytail-review\` | Review current diff | Before PRs, code reviews |**  
**| \`/ponytail-audit\` | Audit entire repo | Quarterly cleanup, technical debt assessment |**  
**| \`/ponytail-debt\` | Track shortcuts | When using \`ponytail:\` comments, to remember what to revisit |**  
**| \`/ponytail-help\` | Quick reference | When you forget the commands |**

**\#\#\# Setting Default Mode**  
**\`\`\`bash**  
**export PONYTAIL\_DEFAULT\_MODE=lite   \# or full, ultra, off**  
**\`\`\`**

**Or create \`\~/.config/ponytail/config.json\`:**  
**\`\`\`json**  
**{ "defaultMode": "ultra" }**  
**\`\`\`**

**\#\# Practical Examples for Website Development**

**\#\#\# 1\. Date Picker**  
**\*\*Without Ponytail:\*\***  
**\`\`\`javascript**  
**// Installs flatpickr**  
**import flatpickr from "flatpickr";**  
**import "flatpickr/dist/flatpickr.css";**  
**flatpickr("\#datepicker", {**  
  **dateFormat: "Y-m-d",**  
  **// ... 20+ lines of config**  
**});**  
**\`\`\`**

**\*\*With Ponytail:\*\***  
**\`\`\`html**  
**\<\!-- ponytail: browser has one \--\>**  
**\<input type="date"\>**  
**\`\`\`**

**\#\#\# 2\. Form Validation**  
**\*\*Without Ponytail:\*\***  
**\`\`\`javascript**  
**// Installs a validation library**  
**import validate from "validator";**  
**function validateForm() {**  
  **const email \= document.getElementById('email').value;**  
  **if (\!validate.isEmail(email)) {**  
    **// ... 10+ lines of error handling**  
  **}**  
**}**  
**\`\`\`**

**\*\*With Ponytail:\*\***  
**\`\`\`html**  
**\<\!-- ponytail: browser has one \--\>**  
**\<input type="email" required\>**  
**\`\`\`**

**\#\#\# 3\. Debouncing Input**  
**\*\*Without Ponytail:\*\***  
**\`\`\`javascript**  
**// 20+ line debounce function**  
**function debounce(fn, delay) {**  
  **let timeoutId;**  
  **return function(...args) {**  
    **clearTimeout(timeoutId);**  
    **timeoutId \= setTimeout(() \=\> fn.apply(this, args), delay);**  
  **};**  
**}**  
**\`\`\`**

**\*\*With Ponytail:\*\***  
**\`\`\`javascript**  
**// ponytail: use native scheduling**  
**input.addEventListener('input', () \=\> {**  
  **requestAnimationFrame(() \=\> {**  
    **// your logic**  
  **});**  
**});**  
**\`\`\`**

**\#\#\# 4\. CSS Animations**  
**\*\*Without Ponytail:\*\***  
**\`\`\`javascript**  
**// Installs GSAP**  
**gsap.to(".element", {**  
  **duration: 1,**  
  **x: 100,**  
  **opacity: 0.5,**  
  **ease: "power2.out"**  
**});**  
**\`\`\`**

**\*\*With Ponytail:\*\***  
**\`\`\`css**  
**/\* ponytail: CSS does this \*/**  
**.element {**  
  **transition: all 1s ease;**  
**}**  
**.element.active {**  
  **transform: translateX(100px);**  
  **opacity: 0.5;**  
**}**  
**\`\`\`**

**\#\#\# 5\. State Management**  
**\*\*Without Ponytail:\*\***  
**\`\`\`javascript**  
**// Installs Redux**  
**const store \= createStore(reducer);**  
**// ... hundreds of lines of setup**  
**\`\`\`**

**\*\*With Ponytail:\*\***  
**\`\`\`javascript**  
**// ponytail: URLSearchParams is state**  
**const params \= new URLSearchParams(window.location.search);**  
**const state \= Object.fromEntries(params);**  
**\`\`\`**

**\#\#\# 6\. API Calls**  
**\*\*Without Ponytail:\*\***  
**\`\`\`javascript**  
**// Complex fetch wrapper**  
**class APIClient {**  
  **constructor() { /\* ... \*/ }**  
  **async get(endpoint) { /\* ... \*/ }**  
  **// ... 50+ lines**  
**}**  
**\`\`\`**

**\*\*With Ponytail:\*\***  
**\`\`\`javascript**  
**// ponytail: fetch is the wrapper**  
**const response \= await fetch('/api/data');**  
**const data \= await response.json();**  
**\`\`\`**

**\#\# Best Practices**

**\#\#\# 1\. Start with \`full\` mode**  
**Get used to the philosophy first, then adjust based on your needs.**

**\#\#\# 2\. Review \`ponytail:\` comments**  
**When the agent writes code with \`// ponytail:\` comments, they mark where shortcuts were taken. Track these with \`/ponytail-debt\` and revisit when needed.**

**\#\#\# 3\. Use \`/ponytail-review\` before commits**  
**It catches over-engineering you might have missed.**

**\#\#\# 4\. Run periodic audits**  
**Use \`/ponytail-audit\` monthly or quarterly to keep your codebase clean.**

**\#\#\# 5\. Combine with your own judgment**  
**Ponytail is a guide, not a dictator. If you genuinely need that library, use it.**

**\#\#\# 6\. Document exceptions**  
**When you override Ponytail's suggestion, document why in your code.**

**\#\# Performance Metrics**

**Based on benchmarks (Claude API, median across 5 tasks):**

**| Metric | Improvement |**  
**|--------|------------|**  
**| \*\*Lines of code\*\* | 80-94% less |**  
**| \*\*Speed\*\* | 3-6× faster |**  
**| \*\*Cost\*\* | 42-75% cheaper |**

**\*Results vary by model and prompt \- the ruleset re-injects each turn, so on short prompts or terse reasoning models, overhead can outweigh savings.\***

**\#\# Common Pitfalls to Avoid**

**\#\#\# ❌ \*\*Using Ponytail for Everything\*\***  
**Even Ponytail says it's not always the answer. Use judgment.**

**\#\#\# ❌ \*\*Ignoring the \`ponytail:\` comments\*\***  
**They're not just comments \- they're TODO items for future improvement.**

**\#\#\# ❌ \*\*Sacrificing Accessibility\*\***  
**The rules explicitly say: "never cut validation, error handling, security, or accessibility." Follow this.**

**\#\#\# ❌ \*\*Assuming Minimal \= Performant\*\***  
**Always test. Sometimes a slightly more verbose solution performs better.**

**\#\#\# ❌ \*\*Forgetting about Browser Support\*\***  
**Native features might not work in all browsers you need to support.**

**\#\#\# ❌ \*\*Using Ultra Mode on Complex Projects\*\***  
**Ultra is for refactoring bloated codebases, not for building new complex features.**

**\#\# Troubleshooting**

**\#\#\# Ponytail not applying?**  
**\- Check installation completed successfully**  
**\- Verify plugin is enabled in your AI tool**  
**\- Try \`/ponytail full\` to force activation**  
**\- Check if you're in a supported tool**

**\#\#\# Too aggressive?**  
**\- Switch to \`/ponytail lite\` for more flexibility**  
**\- Use \`/ponytail off\` temporarily**  
**\- Adjust your default mode to \`lite\`**

**\#\#\# Not aggressive enough?**  
**\- Switch to \`/ponytail ultra\`**  
**\- Run \`/ponytail-audit\` to find bloat**

**\#\#\# Commands not working?**  
**\- Ensure you're in a skill-capable host (Claude Code, Codex, OpenCode, Gemini, pi)**  
**\- For Codex, use \`@ponytail-review\` instead**  
**\- Check tool-specific documentation**

**\#\# Quick Decision Guide**

**\*\*Ask yourself these questions before writing code:\*\***

**1\. ❓ Does this need to exist at all?**  
**2\. ❓ Does the standard library already do this?**  
**3\. ❓ Is this a native browser feature?**  
**4\. ❓ Is there an already installed dependency?**  
**5\. ❓ Can I do this in one line?**  
**6\. ❓ What's the absolute minimum that works?**

**\*\*If you can't answer "yes" to any of 1-5, you're at rung 6.\*\***

**\#\# Additional Resources**

**\- \[Official GitHub Repository\](https://github.com/DietrichGebert/ponytail)**  
**\- \[Benchmarks & Methodology\](benchmarks/)**  
**\- \[Examples\](examples/)**  
**\- \[Agent Portability Documentation\](docs/agent-portability.md)**  
**\- \[MIT License\](LICENSE)**

**\---**

**\*\*Remember:\*\* Ponytail says nothing. He writes one line. It works. Be like Ponytail. 🐴**

**\---**

**\*Last Updated: 2026\***  
**\`\`\`**

**Save this as \`ponytail-guide.md\` and you'll have a complete reference for understanding, installing, and using Ponytail in your daily development work\!**

