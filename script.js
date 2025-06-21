document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const ideaOutput = document.getElementById('idea-output');

    // New: References to all custom input fields
    const userTopicInput = document.getElementById('user-topic');
    const userAudienceInput = document.getElementById('user-audience');
    const userGoalInput = document.getElementById('user-goal');
    const userToolInput = document.getElementById('user-tool');

    // Revamped, less cliché, and more engaging idea templates
    const templates = [
        "Unlocking [Goal]: The [Number] [Topic] Secrets No One Tells You",
        "The Future of [Topic]: Why [Trend/Problem] Is Reshaping [Industry]",
        "From Zero to [Goal]: My [Time] Blueprint for Mastering [Topic] as a [Audience]",
        "Beyond the Hype: Debunking [Number] Myths About [Topic] in [Industry]",
        "[Topic A] vs. [Topic B]: A Head-to-Head Battle for [Goal]",
        "The Underrated [Tool] Hack That Will Revolutionize Your [Topic] Workflow",
        "Solving [Problem]: A [Audience]'s Guide to Practical [Topic] Application",
        "The Silent Killer of [Goal]: How to Overcome [Challenge] in [Topic]",
        "Inside the Minds of [Industry] Leaders: Their Approach to [Topic]",
        "Mastering [Skill]: The [Number]-Step Framework for [Audience] Success",
        "The Dark Horse of [Topic]: Why [Niche/Specific Area] Deserves Your Attention",
        "Beyond Productivity: How [Topic] Can Transform Your [Life Aspect] as a [Audience]",
        "Is [Current Practice] Obsolete? A Radical New Take on [Topic]",
        "The [Time] Challenge: Can You Achieve [Goal] Using Only [Tool] for [Topic]?",
        "[Number] Unexpected Lessons from My [Topic] Journey"
    ];

    // Expanded and more modern word lists
    const topics = [
        "AI Ethics", "Quantum Computing", "Personal Finance Automation", "Sustainable Living",
        "Digital Nomadism", "Web3 Development", "Biohacking", "Creator Economy",
        "Ethical Hacking", "Product-Led Growth", "Behavioral Economics", "No-Code Development",
        "Mental Resilience", "Data Storytelling", "Customer Experience (CX)", "Decentralized Finance (DeFi)",
        "Space Exploration", "Renewable Energy", "Personal Branding in the Digital Age", "Mindfulness at Work"
    ];

    const audiences = [
        "Solopreneurs", "Remote Workers", "Early-Stage Startups", "Data Scientists",
        "UX Designers", "Content Strategists", "Indie Hackers", "Growth Marketers",
        "Students", "Career Changers", "Busy Parents", "Tech Enthusiasts", "Aspiring Founders"
    ];

    const numbers = [3, 5, 7, 9, 11, 13, 17, 21];
    
    const times = ["One Week", "30 Days", "Three Months", "Six Months", "90-Day", "24-Hour"];
    
    const goals = [
        "Hyper-Productivity", "Financial Independence", "Community Building", "Skill Diversification",
        "Burnout Prevention", "Audience Engagement", "Career Advancement", "Passive Income",
        "Creative Flow", "Market Dominance"
    ];
    
    const tools = [
        "Webflow", "Notion AI", "Midjourney", "TensorFlow", "Kubernetes", "Airtable", "Zapier",
        "Figma", "ChatGPT", "Obsidian", "Canva Pro", "TubeBuddy"
    ];
    
    const industries = [
        "SaaS", "E-commerce", "Fintech", "Edtech", "Healthcare Tech", "Gaming",
        "Sustainable Tech", "Creator Economy", "Venture Capital", "Biotech"
    ];
    
    const problems = [
        "Creator's Block", "Low Engagement", "Audience Retention", "Monetization Hurdles",
        "Skill Gap", "Market Saturation", "Time Management", "Imposter Syndrome",
        "Content Overwhelm", "Scaling Challenges"
    ];

    const lifeAspects = ["Career", "Finances", "Relationships", "Health", "Creativity", "Personal Development"];
    const currentPractices = ["Traditional Marketing", "Manual Data Entry", "Generic Content", "Fixed Mindset", "Solo Entrepreneurship"];
    const skills = ["Coding", "Public Speaking", "Writing", "Design", "Data Analysis", "Leadership", "Negotiation"];
    const nicheAreas = ["Micro-SaaS", "AI Art", "Silent Vlogging", "Local SEO", "Community-Led Growth"];


    function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    async function generateIdea() {
        // Show loading state
        ideaOutput.innerHTML = `<p>Brainstorming brilliance... 🤔</p>`;
        ideaOutput.classList.add('loading');
        copyBtn.classList.add('hidden'); // Hide copy button during generation

        // Simulate network latency (enhances user experience, feels more "smart")
        await new Promise(resolve => setTimeout(resolve, 800)); 

        let template = getRandomElement(templates);

        // --- Get user inputs or fallback to random ---
        const finalTopic = userTopicInput.value.trim() || getRandomElement(topics);
        const finalAudience = userAudienceInput.value.trim() || getRandomElement(audiences);
        const finalGoal = userGoalInput.value.trim() || getRandomElement(goals);
        const finalTool = userToolInput.value.trim() || getRandomElement(tools);
        
        // Ensure that secondary topics/problems are also varied if main topic is custom
        const finalAnotherTopic = getRandomElement(topics); // Always random for distinctness
        const finalProblem = getRandomElement(problems);
        const finalIndustry = getRandomElement(industries);
        const finalLifeAspect = getRandomElement(lifeAspects);
        const finalCurrentPractice = getRandomElement(currentPractices);
        const finalSkill = getRandomElement(skills);
        const finalNicheArea = getRandomElement(nicheAreas);


        let idea = template.replace(/{Topic}/g, finalTopic)
                           .replace(/{AnotherTopic}/g, finalAnotherTopic)
                           .replace(/{Audience}/g, finalAudience) // Use custom audience
                           .replace(/{Number}/g, getRandomElement(numbers))
                           .replace(/{Time}/g, getRandomElement(times))
                           .replace(/{Goal}/g, finalGoal) // Use custom goal
                           .replace(/{Tool}/g, finalTool) // Use custom tool
                           .replace(/{Industry}/g, finalIndustry)
                           .replace(/{Problem}/g, finalProblem)
                           .replace(/{Challenge}/g, finalProblem) // Use problem for challenge
                           .replace(/{Trend\/Problem}/g, getRandomElement(problems)) 
                           .replace(/{Life Aspect}/g, finalLifeAspect)
                           .replace(/{Current Practice}/g, finalCurrentPractice)
                           .replace(/{Skill}/g, finalSkill)
                           .replace(/{Niche\/Specific Area}/g, finalNicheArea);


        // Final pass to ensure all placeholders are replaced, if any remain from complex templates
        idea = idea.replace(/{Topic}/g, finalTopic); 
        idea = idea.replace(/{AnotherTopic}/g, finalAnotherTopic);
        idea = idea.replace(/{Audience}/g, finalAudience);
        idea = idea.replace(/{Goal}/g, finalGoal);
        idea = idea.replace(/{Tool}/g, finalTool);


        ideaOutput.innerHTML = `<p>${idea}</p>`;
        ideaOutput.classList.remove('loading'); // Remove loading state
        copyBtn.classList.remove('hidden'); // Show copy button
    }

    function copyIdea() {
        const ideaText = ideaOutput.querySelector('p').textContent;
        navigator.clipboard.writeText(ideaText).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied! 🎉';
            copyBtn.style.background = 'linear-gradient(45deg, #28a745, #218838)'; // Change to green on success
            copyBtn.style.boxShadow = '0 6px 20px rgba(40, 167, 69, 0.6)';

            setTimeout(() => {
                copyBtn.textContent = originalText;
                copyBtn.style.background = 'linear-gradient(45deg, #3498db, #2980b9)'; // Revert to blue
                copyBtn.style.boxShadow = '0 6px 20px rgba(52, 152, 219, 0.4)';
            }, 1500); // Revert after 1.5 seconds
        }).catch(err => {
            console.error('Failed to copy: ', err);
            alert('Failed to copy. Please copy manually.');
        });
    }

    // Event listeners
    generateBtn.addEventListener('click', generateIdea);

    // Add event listeners for all input fields to trigger generation on keyup for live preview
    userTopicInput.addEventListener('keyup', generateIdea);
    userAudienceInput.addEventListener('keyup', generateIdea);
    userGoalInput.addEventListener('keyup', generateIdea);
    userToolInput.addEventListener('keyup', generateIdea);
    
    copyBtn.addEventListener('click', copyIdea);

    // Generate an initial idea on page load
    generateIdea();
});