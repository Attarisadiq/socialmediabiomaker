// Navigation
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
};

// Bio Generator
const bioTemplates = {
    instagram: [
        "✨ {name} | {interest} enthusiast\n📸 Capturing life's moments\n🌍 {location}\n💫 Living life to the fullest",
        "🌟 {name} | {interest} lover\n📱 {social_handle}\n🎯 {goal}\n✨ Making memories",
        "💫 {name} | {interest} explorer\n📸 {social_handle}\n🌍 {location}\n✨ Spreading positivity",
    ],
    telegram: [
        "👋 {name} | {interest} enthusiast\n📱 {social_handle}\n💬 Let's connect!\n✨ {goal}",
        "🌟 {name} | {interest} lover\n📱 {social_handle}\n💫 {goal}\n✨ Making connections",
        "💫 {name} | {interest} explorer\n📱 {social_handle}\n🌍 {location}\n✨ Always learning",
    ],
    twitter: [
        "✨ {name} | {interest} enthusiast\n🐦 {social_handle}\n💭 {goal}\n🌍 {location}",
        "🌟 {name} | {interest} lover\n🐦 {social_handle}\n💫 {goal}\n✨ Sharing thoughts",
        "💫 {name} | {interest} explorer\n🐦 {social_handle}\n🌍 {location}\n✨ Building community",
    ],
};

// Emoji mappings for different contexts
const emojiMap = {
    professional: {
        minimal: ['💼', '📊', '🎯'],
        moderate: ['💼', '📊', '🎯', '✨', '📈', '🌟'],
        lots: ['💼', '📊', '🎯', '✨', '📈', '🌟', '💪', '🚀', '⭐', '📱']
    },
    casual: {
        minimal: ['✌️', '💫', '🌈'],
        moderate: ['✌️', '💫', '🌈', '😊', '✨', '💕'],
        lots: ['✌️', '💫', '🌈', '😊', '✨', '💕', '🎉', '🌺', '💖', '🎨']
    },
    funny: {
        minimal: ['😄', '🎭', '✨'],
        moderate: ['😄', '🎭', '✨', '🎪', '🎈', '🎉'],
        lots: ['😄', '🎭', '✨', '🎪', '🎈', '🎉', '🤪', '🦄', '🎠', '🌈']
    },
    motivational: {
        minimal: ['💪', '🎯', '⭐'],
        moderate: ['💪', '🎯', '⭐', '🔥', '✨', '📈'],
        lots: ['💪', '🎯', '⭐', '🔥', '✨', '📈', '🚀', '💫', '🌟', '🎉']
    },
    creative: {
        minimal: ['🎨', '✨', '💫'],
        moderate: ['🎨', '✨', '💫', '🎭', '🌟', '🎪'],
        lots: ['🎨', '✨', '💫', '🎭', '🌟', '🎪', '🎠', '🦄', '🌈', '💖']
    }
};

function getRandomEmojis(tone, style, count) {
    if (style === 'none') return '';
    const emojis = emojiMap[tone][style];
    const selectedEmojis = [];
    const emojiCount = style === 'minimal' ? 2 : style === 'moderate' ? 4 : 6;
    
    for (let i = 0; i < emojiCount && i < count; i++) {
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        if (!selectedEmojis.includes(randomEmoji)) {
            selectedEmojis.push(randomEmoji);
        }
    }
    return selectedEmojis.join(' ');
}

function generateBio() {
    const platform = document.getElementById('platform').value;
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const interest = document.getElementById('interest').value;
    const location = document.getElementById('location').value;
    const handle = document.getElementById('handle').value;
    const goal = document.getElementById('goal').value;
    const tone = document.getElementById('tone').value;
    const emojiStyle = document.getElementById('emoji-style').value;
    const keywords = document.getElementById('keywords').value.split(',').map(k => k.trim());
    const birthday = document.getElementById('birthday').value;
    const hobbies = document.getElementById('hobbies').value;
    const website = document.getElementById('website').value;
    const quote = document.getElementById('quote').value;
    const languages = document.getElementById('languages').value;

    let bio = '';
    const emojis = getRandomEmojis(tone, emojiStyle, 8); // Increased emoji count

    switch (platform) {
        case 'instagram':
            bio = generateInstagramBio(name, profession, interest, location, handle, goal, emojis, keywords, tone, birthday, hobbies, website, quote, languages);
            break;
        case 'telegram':
            bio = generateTelegramBio(name, profession, interest, location, handle, goal, emojis, keywords, tone, birthday, hobbies, website, quote, languages);
            break;
        case 'twitter':
            bio = generateTwitterBio(name, profession, interest, location, handle, goal, emojis, keywords, tone, birthday, hobbies, website, quote, languages);
            break;
        case 'linkedin':
            bio = generateLinkedInBio(name, profession, interest, location, handle, goal, emojis, keywords, tone, birthday, hobbies, website, quote, languages);
            break;
        case 'tiktok':
            bio = generateTikTokBio(name, profession, interest, location, handle, goal, emojis, keywords, tone, birthday, hobbies, website, quote, languages);
            break;
    }

    document.getElementById('generatedBio').innerText = bio;
}

function generateInstagramBio(name, profession, interest, location, handle, goal, emojis, keywords, tone, birthday, hobbies, website, quote, languages) {
    const emojiArray = emojis.split(' ');
    return [
        `${emojiArray[0]} ${name} | ${profession}`,
        `${emojiArray[1]} Passionate about ${interest}`,
        `📍 ${location} | ${handle}`,
        birthday ? `🎂 ${birthday}` : '',
        hobbies ? `${emojiArray[2]} Hobbies: ${hobbies}` : '',
        `🎯 ${goal}`,
        languages ? `🌍 ${languages}` : '',
        website ? `🔗 ${website}` : '',
        quote ? `✨ "${quote}"` : '',
        keywords.length > 0 ? keywords.slice(0, 3).map(k => `#${k}`).join(' ') : '✨ Creating magic everyday',
        `💌 DM for collaborations`
    ].filter(line => line !== '').join('\n');
}

function generateTwitterBio(name, profession, interest, location, handle, goal, emojis, keywords, tone, birthday, hobbies, website, quote, languages) {
    const emojiArray = emojis.split(' ');
    return [
        `${emojiArray[0]} ${name} | ${profession}`,
        `${emojiArray[1]} ${interest}`,
        `📍 ${location} | 🎂 ${birthday}`,
        languages ? `🌍 ${languages}` : '',
        hobbies ? `${emojiArray[2]} ${hobbies}` : '',
        `${handle} | ${goal}`,
        website ? `🔗 ${website}` : '',
        keywords.length > 0 ? `Skills: ${keywords.slice(0, 3).join(' • ')}` : '✨ Always growing'
    ].filter(line => line !== '').join('\n');
}

function generateLinkedInBio(name, profession, interest, location, handle, goal, emojis, keywords, tone, birthday, hobbies, website, quote, languages) {
    return [
        `${profession} | ${name}`,
        `Specializing in ${interest}`,
        `Based in ${location}`,
        languages ? `Languages: ${languages}` : '',
        goal,
        hobbies ? `Interests: ${hobbies}` : '',
        keywords.length > 0 ? `Expertise: ${keywords.join(' • ')}` : 'Committed to professional excellence',
        website ? `Portfolio: ${website}` : '',
        `Contact: ${handle}`
    ].filter(line => line !== '').join('\n');
}

function generateTelegramBio(name, profession, interest, location, handle, goal, emojis, keywords, tone, birthday, hobbies, website, quote, languages) {
    const emojiArray = emojis.split(' ');
    return [
        `${emojiArray[0]} ${name}`,
        `${emojiArray[1]} ${profession}`,
        `${emojiArray[2]} ${interest}`,
        `📍 ${location}`,
        birthday ? `🎂 ${birthday}` : '',
        hobbies ? `${emojiArray[3]} ${hobbies}` : '',
        languages ? `🌍 ${languages}` : '',
        `💭 ${goal}`,
        website ? `🔗 ${website}` : '',
        `📱 ${handle}`,
        quote ? `✨ "${quote}"` : ''
    ].filter(line => line !== '').join('\n');
}

function generateTikTokBio(name, profession, interest, location, handle, goal, emojis, keywords, tone, birthday, hobbies, website, quote, languages) {
    const emojiArray = emojis.split(' ');
    return [
        `${emojiArray[0]} ${name}`,
        `${emojiArray[1]} ${profession}`,
        birthday ? `🎂 ${birthday}` : '',
        `📍 ${location}`,
        hobbies ? `${emojiArray[2]} ${hobbies}` : '',
        languages ? `🌍 ${languages}` : '',
        website ? `🔗 ${website}` : '',
        keywords.length > 0 ? keywords.slice(0, 3).map(k => `#${k}`).join(' ') : '',
        `✨ ${goal}`
    ].filter(line => line !== '').join('\n');
}

function getMotivationalQuote() {
    const quotes = [
        "Dream big, work hard",
        "Making dreams reality",
        "Creating my own path",
        "Living life purposefully",
        "Turning ideas into reality"
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function copyBio() {
    const bio = document.getElementById('generatedBio').innerText;
    navigator.clipboard.writeText(bio).then(() => {
        alert('Bio copied to clipboard!');
    });
}

// Mobile menu toggle
document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('nav-active');
    document.querySelector('.burger').classList.toggle('toggle');
});