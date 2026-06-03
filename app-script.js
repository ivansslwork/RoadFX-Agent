const puterAgentsList = [
    {
        id: 'max',
        name: 'Max Router Prime',
        icon: '⚡',
        model: 'gpt-4o',
        provider: 'Puter',
        providerType: 'puter',
        keyUrl: 'https://puter.com/dashboard',
        description: 'Router premium untuk memilih jalur model terbaik secara otomatis dengan latency cepat dan konteks besar.',
        badge: '⭐ 5.0/5',
        color: '#df9f28',
        tools: ['Smart routing', 'Deep web search', 'Sandbox execution'],
        systemPrompt: 'You are Max Router Prime, Arena\'s elite router. Choose the strongest approach for the user, produce clear markdown, and emphasize execution-ready answers.'
    },
    {
        id: 'claude',
        name: 'Claude 4.7 Opus Thinking',
        icon: '🧠',
        model: 'claude-sonnet-4-5',
        provider: 'Anthropic',
        providerType: 'anthropic',
        keyUrl: 'https://console.anthropic.com/settings/keys',
        description: 'Model penalaran dan writing premium untuk dokumen panjang, UI copy, planning, dan penjelasan kompleks.',
        badge: '⭐ 4.9/5',
        color: '#d97706',
        tools: ['Long-form writing', 'Reasoning', 'Spec drafting'],
        systemPrompt: 'You are Claude 4.7 Opus Thinking. Focus on elegant reasoning, precise writing, and polished frontend/code explanations with strong structure.'
    },
    {
        id: 'gpt',
        name: 'GPT-5.5 High-Reasoning',
        icon: '💻',
        model: 'gpt-5',
        provider: 'OpenAI',
        providerType: 'openai',
        keyUrl: 'https://platform.openai.com/api-keys',
        description: 'Agent coding premium untuk arsitektur software, debugging serius, refactor, dan pembuatan script kompleks.',
        badge: '⭐ 4.9/5',
        color: '#2563eb',
        tools: ['Code generation', 'Architecture', 'Refactoring'],
        systemPrompt: 'You are GPT-5.5 High-Reasoning. Prioritize accurate code, implementation detail, algorithmic clarity, and practical system design.'
    },
    {
        id: 'gemini',
        name: 'Gemini 2.5 Pro Research',
        icon: '🔍',
        model: 'google/gemini-2.5-pro',
        provider: 'Google',
        providerType: 'google',
        keyUrl: 'https://aistudio.google.com/app/apikey',
        description: 'Agent riset cepat untuk browsing, ringkasan multi-sumber, outline, dan analisis data berbasis konteks panjang.',
        badge: '⭐ 4.8/5',
        color: '#06b6d4',
        tools: ['Research', 'Context analysis', 'Fast summaries'],
        systemPrompt: 'You are Gemini 2.5 Pro Research. Deliver fast, structured, citation-friendly summaries and strong multi-step analysis.'
    },
    {
        id: 'grok',
        name: 'Grok 4 Live Search',
        icon: '🚀',
        model: 'grok-4',
        provider: 'xAI',
        providerType: 'xai',
        keyUrl: 'https://console.x.ai',
        description: 'Agent live-information untuk insight real-time, sintesis tren, dan ide cepat dengan gaya tajam.',
        badge: '⭐ 4.8/5',
        color: '#8b5cf6',
        tools: ['Real-time synthesis', 'Trend analysis', 'Fast answers'],
        systemPrompt: 'You are Grok 4 Live Search. Be direct, insightful, current-feeling, and strong at real-time style synthesis.'
    },
    {
        id: 'sora',
        name: 'Sora 2 Video Agent',
        icon: '🎬',
        model: 'openai/sora-2-turbo',
        provider: 'OpenAI',
        providerType: 'video',
        keyUrl: 'https://platform.openai.com/api-keys',
        description: 'Top-rated video generation agent dengan hasil cinematic dan prompt-to-shot breakdown yang sangat detail.',
        badge: '⭐ 4.9/5',
        color: '#8b5cf6',
        tools: ['Cinematic generation', 'Text-to-video', 'Motion synthesis'],
        systemPrompt: 'You are Sora 2. Create visually rich cinematic video plans with detailed scene, shot, lighting, and motion instructions.'
    },
    {
        id: 'kling',
        name: 'Kling 2.5 Pro',
        icon: '🎥',
        model: 'kuaishou/kling-2.5-pro',
        provider: 'Kling',
        providerType: 'video',
        keyUrl: 'https://klingapi.com/docs',
        description: 'Agent video premium dengan fokus realism, physics simulation, dan karakter bergerak alami.',
        badge: '⭐ 4.8/5',
        color: '#ec4899',
        tools: ['Character animation', 'Physics engine', 'Scene compositing'],
        systemPrompt: 'You are Kling 2.5 Pro. Provide precise, realistic, shot-by-shot plans for high-fidelity video creation.'
    },
    {
        id: 'runway',
        name: 'Runway Gen-4 Alpha',
        icon: '🎞️',
        model: 'runway/gen-4-alpha-turbo',
        provider: 'Runway',
        providerType: 'video',
        keyUrl: 'https://docs.runway.team/api/overview',
        description: 'Agent video profesional untuk style transfer, motion brush, video edit, dan storytelling visual.',
        badge: '⭐ 4.8/5',
        color: '#f59e0b',
        tools: ['Style transfer', 'Motion brush', 'Video inpainting'],
        systemPrompt: 'You are Runway Gen-4 Alpha. Build professional video production plans with editing pipeline, style control, and post-processing steps.'
    },
    {
        id: 'veo',
        name: 'Google Veo 3 Director',
        icon: '📽️',
        model: 'google/veo-3-cinematic',
        provider: 'Google',
        providerType: 'video',
        keyUrl: 'https://aistudio.google.com/app/apikey',
        description: 'Agent cinematic multi-shot dengan narasi visual rapi, audio-aware direction, dan struktur adegan modern.',
        badge: '⭐ 4.7/5',
        color: '#3b82f6',
        tools: ['Audio-video sync', 'Multi-shot stories', 'Cinematic AI'],
        systemPrompt: 'You are Google Veo 3 Director. Produce cinematic multi-shot plans with audio cues, transitions, and compelling visual arcs.'
    },
    {
        id: 'luma',
        name: 'Luma Dream Machine 2',
        icon: '✨',
        model: 'luma/dream-machine-2',
        provider: 'Luma',
        providerType: 'video',
        keyUrl: 'https://docs.agents.lumalabs.ai/',
        description: 'Agent video cepat untuk motion interpolation, transisi dreamy, dan konten social-friendly yang halus.',
        badge: '⭐ 4.7/5',
        color: '#06b6d4',
        tools: ['Motion interpolation', 'Dream transitions', 'Viral formats'],
        systemPrompt: 'You are Luma Dream Machine 2. Optimize for smooth motion, temporal planning, and striking transitions for shareable video output.'
    }
];

const settingsStorageKeys = {
    unlockVideo: 'arena_settings_unlock_video',
    unlimitedUse: 'arena_settings_unlimited_use',
    puterToken: 'arena_settings_puter_token',
    openai: 'arena_settings_openai_key',
    anthropic: 'arena_settings_anthropic_key',
    gemini: 'arena_settings_gemini_key',
    xai: 'arena_settings_xai_key',
    gateway: 'arena_settings_custom_gateway',
    telegramEnabled: 'arena_settings_telegram_enabled',
    telegramToken: 'arena_settings_telegram_bot_token',
    telegramChannel: 'arena_settings_telegram_channel_id',
    telegramGroup: 'arena_settings_telegram_group_id',
    telegramThread: 'arena_settings_telegram_thread_id',
    telegramTemplate: 'arena_settings_telegram_template',
    buildFolder: 'arena_build_folder_files',
    sessions: 'arena_agent_sessions'
};

let activeAgentId = 'max';
let chatHistory = [];
let isStreaming = false;
let recentSessions = [];
let activeSessionId = null;
let attachedFiles = [];
let buildFolderFiles = [];

const sidebar = document.getElementById('sidebar');
const menuToggleBtn = document.getElementById('menuToggleBtn');
const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
const newChatBtn = document.getElementById('newChatBtn');
const navAgentModeBtn = document.getElementById('navAgentModeBtn');
const navSettingsBtn = document.getElementById('navSettingsBtn');
const navLeaderboardBtn = document.getElementById('navLeaderboardBtn');
const headerLeaderboardBtn = document.getElementById('headerLeaderboardBtn');
const headerBuildFolderBtn = document.getElementById('headerBuildFolderBtn');
const buildFolderCount = document.getElementById('buildFolderCount');
const closeLeaderboardBtn = document.getElementById('closeLeaderboardBtn');
const leaderboardOverlay = document.getElementById('leaderboardOverlay');
const buildFolderOverlay = document.getElementById('buildFolderOverlay');
const closeBuildFolderBtn = document.getElementById('closeBuildFolderBtn');
const buildFilesList = document.getElementById('buildFilesList');
const btnClearBuildFolder = document.getElementById('btnClearBuildFolder');
const btnExportBuildManifest = document.getElementById('btnExportBuildManifest');
const recentConversationsList = document.getElementById('recentConversationsList');
const currentWorkspaceAgent = document.getElementById('currentWorkspaceAgent');
const welcomePanel = document.getElementById('welcomePanel');
const chatPanel = document.getElementById('chatPanel');
const agentGrid = document.getElementById('agentGrid');
const mainPromptArea = document.getElementById('mainPromptArea');
const chatPromptArea = document.getElementById('chatPromptArea');
const mainSendBtn = document.getElementById('mainSendBtn');
const chatSendBtn = document.getElementById('chatSendBtn');
const chatMessagesContainer = document.getElementById('chatMessagesContainer');
const activeThinkingTerminal = document.getElementById('activeThinkingTerminal');
const thinkingStepsLogs = document.getElementById('thinkingStepsLogs');
const thinkingAgentName = document.getElementById('thinkingAgentName');
const chatActiveAgentBadge = document.getElementById('chatActiveAgentBadge');

const authDot = document.getElementById('authDot');
const authStatusText = document.getElementById('authStatusText');
const sidebarAuthBtn = document.getElementById('sidebarAuthBtn');
const userNameText = document.getElementById('userNameText');
const userAvatar = document.getElementById('userAvatar');
const userStatusText = document.getElementById('userStatusText');

const uploadFileBtn = document.getElementById('uploadFileBtn');
const chatUploadFileBtn = document.getElementById('chatUploadFileBtn');
const fileInputHidden = document.getElementById('fileInputHidden');
const attachedFilesContainer = document.getElementById('attachedFilesContainer');
const chatAttachedFilesContainer = document.getElementById('chatAttachedFilesContainer');

const toggleSearchBtn = document.getElementById('toggleSearchBtn');
const toggleSandboxBtn = document.getElementById('toggleSandboxBtn');
const chatToggleSearchBtn = document.getElementById('chatToggleSearchBtn');
const chatToggleSandboxBtn = document.getElementById('chatToggleSandboxBtn');

const settingsOverlay = document.getElementById('settingsOverlay');
const closeSettingsBtn = document.getElementById('closeSettingsBtn');
const btnCancelSettings = document.getElementById('btnCancelSettings');
const btnSaveSettings = document.getElementById('btnSaveSettings');

const chkUnlockVideo = document.getElementById('chkUnlockVideo');
const chkUnlimitedUse = document.getElementById('chkUnlimitedUse');
const txtPuterToken = document.getElementById('txtPuterToken');
const txtOpenAIBearer = document.getElementById('txtOpenAIBearer');
const txtAnthropicBearer = document.getElementById('txtAnthropicBearer');
const txtGeminiBearer = document.getElementById('txtGeminiBearer');
const txtXaiBearer = document.getElementById('txtXaiBearer');
const txtCustomGateway = document.getElementById('txtCustomGateway');
const btnResetGateway = document.getElementById('btnResetGateway');
const capabilitiesTableBody = document.getElementById('capabilitiesTableBody');

const chkTelegramEnabled = document.getElementById('chkTelegramEnabled');
const txtTelegramBotToken = document.getElementById('txtTelegramBotToken');
const txtTelegramChannelId = document.getElementById('txtTelegramChannelId');
const txtTelegramGroupId = document.getElementById('txtTelegramGroupId');
const txtTelegramThreadId = document.getElementById('txtTelegramThreadId');
const txtTelegramTemplate = document.getElementById('txtTelegramTemplate');
const telegramStatusBadge = document.getElementById('telegramStatusBadge');
const telegramStatusText = document.getElementById('telegramStatusText');
const btnCopyTelegramCurl = document.getElementById('btnCopyTelegramCurl');

document.addEventListener('DOMContentLoaded', function () {
    initSettings();
    loadBuildFolder();
    renderAgentGrid();
    selectActiveAgent(activeAgentId);
    renderCapabilitiesTable();
    initPuterAuth();
    bindInterfaceEvents();
    loadSessionsFromLocalStorage();
    renderBuildFolderCount();
    renderBuildFolderList();
    updateTelegramSummary();
});

function initSettings() {
    if (localStorage.getItem(settingsStorageKeys.unlockVideo) === null) localStorage.setItem(settingsStorageKeys.unlockVideo, 'true');
    if (localStorage.getItem(settingsStorageKeys.unlimitedUse) === null) localStorage.setItem(settingsStorageKeys.unlimitedUse, 'true');
    if (localStorage.getItem(settingsStorageKeys.telegramEnabled) === null) localStorage.setItem(settingsStorageKeys.telegramEnabled, 'false');
    if (localStorage.getItem(settingsStorageKeys.telegramTemplate) === null) {
        localStorage.setItem(settingsStorageKeys.telegramTemplate, '🚀 Build {{file}} selesai\nAgent: {{agent}}\nStatus: {{status}}\nWaktu: {{time}}');
    }

    chkUnlockVideo.checked = localStorage.getItem(settingsStorageKeys.unlockVideo) !== 'false';
    chkUnlimitedUse.checked = localStorage.getItem(settingsStorageKeys.unlimitedUse) !== 'false';
    txtPuterToken.value = localStorage.getItem(settingsStorageKeys.puterToken) || '';
    txtOpenAIBearer.value = localStorage.getItem(settingsStorageKeys.openai) || '';
    txtAnthropicBearer.value = localStorage.getItem(settingsStorageKeys.anthropic) || '';
    txtGeminiBearer.value = localStorage.getItem(settingsStorageKeys.gemini) || '';
    txtXaiBearer.value = localStorage.getItem(settingsStorageKeys.xai) || '';
    txtCustomGateway.value = localStorage.getItem(settingsStorageKeys.gateway) || 'https://api.openai.com/v1';

    chkTelegramEnabled.checked = localStorage.getItem(settingsStorageKeys.telegramEnabled) === 'true';
    txtTelegramBotToken.value = localStorage.getItem(settingsStorageKeys.telegramToken) || '';
    txtTelegramChannelId.value = localStorage.getItem(settingsStorageKeys.telegramChannel) || '';
    txtTelegramGroupId.value = localStorage.getItem(settingsStorageKeys.telegramGroup) || '';
    txtTelegramThreadId.value = localStorage.getItem(settingsStorageKeys.telegramThread) || '';
    txtTelegramTemplate.value = localStorage.getItem(settingsStorageKeys.telegramTemplate) || '';

    updateUIVIPIndicator(chkUnlimitedUse.checked);
}

function updateUIVIPIndicator(isUnlimited) {
    if (isUnlimited) {
        userStatusText.innerHTML = 'Agent Mode • <span style="color: var(--color-sand); font-weight: 700;">VIP Unlimited</span>';
        userStatusText.classList.add('pulse');
    } else {
        userStatusText.innerHTML = 'Agent Mode • Free';
        userStatusText.classList.remove('pulse');
    }
}

function updateTelegramSummary() {
    const isEnabled = chkTelegramEnabled.checked;
    const hasToken = txtTelegramBotToken.value.trim();
    const hasChannel = txtTelegramChannelId.value.trim();
    const hasGroup = txtTelegramGroupId.value.trim();

    if (isEnabled && hasToken && (hasChannel || hasGroup)) {
        telegramStatusBadge.textContent = 'READY';
        telegramStatusBadge.style.backgroundColor = '#10b981';
        telegramStatusText.innerHTML = `Bot tersimpan. Channel: <strong>${sanitizeInline(hasChannel || '-')}</strong> • Group: <strong>${sanitizeInline(hasGroup || '-')}</strong>${txtTelegramThreadId.value ? ' • Thread: <strong>' + sanitizeInline(txtTelegramThreadId.value) + '</strong>' : ''}`;
    } else if (isEnabled) {
        telegramStatusBadge.textContent = 'PARTIAL';
        telegramStatusBadge.style.backgroundColor = '#f59e0b';
        telegramStatusText.textContent = 'Telegram aktif, tetapi token atau target channel/group belum lengkap.';
    } else {
        telegramStatusBadge.textContent = 'LOCAL READY';
        telegramStatusBadge.style.backgroundColor = 'var(--color-sand)';
        telegramStatusText.textContent = 'Integrasi Telegram belum diaktifkan. Simpan token dan target untuk dipakai saat deploy.';
    }
}

function sanitizeInline(value) {
    return String(value || '').replace(/[<>]/g, '');
}

function openSettings() {
    closeLeaderboard();
    closeBuildFolder();
    settingsOverlay.classList.add('active');
    navSettingsBtn.classList.add('active');
    navAgentModeBtn.classList.remove('active');
    navLeaderboardBtn.classList.remove('active');
    renderCapabilitiesTable();
    updateTelegramSummary();
}

function closeSettings() {
    settingsOverlay.classList.remove('active');
    navSettingsBtn.classList.remove('active');
    navAgentModeBtn.classList.add('active');
}

function saveSettings() {
    localStorage.setItem(settingsStorageKeys.unlockVideo, String(chkUnlockVideo.checked));
    localStorage.setItem(settingsStorageKeys.unlimitedUse, String(chkUnlimitedUse.checked));
    localStorage.setItem(settingsStorageKeys.puterToken, txtPuterToken.value.trim());
    localStorage.setItem(settingsStorageKeys.openai, txtOpenAIBearer.value.trim());
    localStorage.setItem(settingsStorageKeys.anthropic, txtAnthropicBearer.value.trim());
    localStorage.setItem(settingsStorageKeys.gemini, txtGeminiBearer.value.trim());
    localStorage.setItem(settingsStorageKeys.xai, txtXaiBearer.value.trim());
    localStorage.setItem(settingsStorageKeys.gateway, txtCustomGateway.value.trim() || 'https://api.openai.com/v1');
    localStorage.setItem(settingsStorageKeys.telegramEnabled, String(chkTelegramEnabled.checked));
    localStorage.setItem(settingsStorageKeys.telegramToken, txtTelegramBotToken.value.trim());
    localStorage.setItem(settingsStorageKeys.telegramChannel, txtTelegramChannelId.value.trim());
    localStorage.setItem(settingsStorageKeys.telegramGroup, txtTelegramGroupId.value.trim());
    localStorage.setItem(settingsStorageKeys.telegramThread, txtTelegramThreadId.value.trim());
    localStorage.setItem(settingsStorageKeys.telegramTemplate, txtTelegramTemplate.value.trim());

    updateUIVIPIndicator(chkUnlimitedUse.checked);
    renderAgentGrid();
    renderCapabilitiesTable();
    updateTelegramSummary();
    alert('⚙️ Pengaturan berhasil disimpan.');
    closeSettings();
}

function renderCapabilitiesTable() {
    capabilitiesTableBody.innerHTML = '';
    const isVideoUnlocked = chkUnlockVideo.checked;
    const isUnlimited = chkUnlimitedUse.checked;

    puterAgentsList.forEach(agent => {
        const tr = document.createElement('tr');
        const hasVideo = isVideoUnlocked || ['sora', 'kling', 'runway', 'veo', 'luma'].includes(agent.id);
        const videoStatusHtml = hasVideo
            ? '<span style="color:#4ade80;font-weight:600;">🎬 Ready</span>'
            : '<span style="color:var(--color-muted);">Text / Tooling</span>';
        const usageLimitHtml = isUnlimited
            ? '<strong style="color:var(--color-sand);">∞ Unlimited VIP</strong>'
            : '<span>100 requests/day</span>';

        tr.innerHTML = `
            <td><code>${agent.id}</code></td>
            <td><strong>${agent.name}</strong></td>
            <td>${agent.provider}</td>
            <td>${videoStatusHtml}</td>
            <td>${usageLimitHtml}</td>
            <td><a class="table-key-link" href="${agent.keyUrl}" target="_blank" rel="noopener noreferrer" title="Buat API key ${agent.provider}">🔑</a></td>
        `;
        capabilitiesTableBody.appendChild(tr);
    });
}

function renderAgentGrid() {
    agentGrid.innerHTML = '';
    const isUnlimited = localStorage.getItem(settingsStorageKeys.unlimitedUse) !== 'false';
    const isVideoUnlocked = localStorage.getItem(settingsStorageKeys.unlockVideo) !== 'false';

    puterAgentsList.forEach(agent => {
        const card = document.createElement('div');
        card.className = `agent-card ${agent.id === activeAgentId ? 'active' : ''}`;
        card.setAttribute('data-agent-id', agent.id);

        const toolsHtml = agent.tools.map(tool => `<span class="agent-tool-tag">${tool}</span>`).join('');
        const unlockedTag = isVideoUnlocked && ['sora', 'kling', 'runway', 'veo', 'luma'].includes(agent.id)
            ? '<span class="agent-tool-tag" style="background-color: rgba(139, 92, 246, 0.15); color: #c084fc; border-color: rgba(139, 92, 246, 0.3);">🎬 Video Ready</span>'
            : '';
        const badgeText = isUnlimited ? '🔓 UNLIMITED' : agent.badge;

        card.innerHTML = `
            <div class="agent-card-header">
                <div class="agent-card-identity">
                    <div class="agent-card-icon" style="color:${agent.color};">${agent.icon}</div>
                    <div style="display:flex;flex-direction:column;gap:4px;min-width:0;">
                        <span class="agent-card-name">${agent.name}</span>
                        <span class="agent-provider-pill">${agent.provider}</span>
                    </div>
                </div>
                <div class="agent-card-links">
                    <a class="agent-api-link" href="${agent.keyUrl}" target="_blank" rel="noopener noreferrer" title="Buat API key ${agent.provider}" onclick="event.stopPropagation()">🔑</a>
                    <span class="agent-card-badge" style="${isUnlimited ? 'background-color: var(--color-sand-muted); color: var(--color-sand); border: 1px solid rgba(223, 159, 40, 0.3);' : ''}">${badgeText}</span>
                </div>
            </div>
            <p class="agent-card-desc">${agent.description}</p>
            <div class="agent-card-tools">${toolsHtml}${unlockedTag}</div>
        `;
        card.addEventListener('click', () => selectActiveAgent(agent.id));
        agentGrid.appendChild(card);
    });
}

function selectActiveAgent(agentId) {
    activeAgentId = agentId;
    const selectedAgent = puterAgentsList.find(agent => agent.id === agentId) || puterAgentsList[0];
    currentWorkspaceAgent.textContent = `Agent Mode (${selectedAgent.name})`;
    chatActiveAgentBadge.textContent = `Active Agent: ${selectedAgent.name}`;
    document.querySelectorAll('.agent-card').forEach(card => {
        card.classList.toggle('active', card.getAttribute('data-agent-id') === agentId);
    });
}

async function initPuterAuth() {
    if (typeof puter === 'undefined') {
        authDot.style.backgroundColor = '#ef4444';
        authStatusText.innerHTML = 'Puter.js tidak termuat di preview offline. File tetap siap dipakai setelah dibuka di browser dengan internet.';
        sidebarAuthBtn.style.display = 'none';
        return;
    }

    try {
        setAuthenticatedState(Boolean(puter.auth.isSignedIn()));
    } catch (error) {
        console.error('Error checking Puter auth:', error);
        setAuthenticatedState(false);
    }
}

function setAuthenticatedState(isAuthenticated) {
    const card = document.getElementById('authStatusCard');
    if (isAuthenticated) {
        card.classList.add('authenticated');
        authDot.style.backgroundColor = '#10b981';
        authStatusText.innerHTML = 'Authenticated successfully! Puter fallback siap dipakai untuk multi-agent routing.';
        sidebarAuthBtn.textContent = '✅ Authenticated';
        sidebarAuthBtn.style.backgroundColor = '#10b981';
        sidebarAuthBtn.style.color = '#fff';
        sidebarAuthBtn.disabled = true;
        if (typeof puter !== 'undefined' && puter.auth?.getUser) {
            puter.auth.getUser().then(user => {
                if (user && user.username) {
                    userNameText.textContent = user.username;
                    userAvatar.textContent = user.username.charAt(0).toUpperCase();
                }
            }).catch(() => {});
        }
    } else {
        card.classList.remove('authenticated');
        authDot.style.backgroundColor = '#f59e0b';
        authStatusText.innerHTML = 'Klik autentikasi jika ingin memakai Puter sebagai fallback multi-model.';
        sidebarAuthBtn.textContent = '🔐 Authenticate with Puter';
        sidebarAuthBtn.style.backgroundColor = 'var(--color-sand)';
        sidebarAuthBtn.style.color = 'var(--bg-darkest)';
        sidebarAuthBtn.disabled = false;
    }
}

async function handlePuterAuthClick() {
    if (typeof puter === 'undefined') return;
    sidebarAuthBtn.textContent = '🔄 Opening popup...';
    try {
        const response = await puter.ai.chat('Hello Puter', { model: 'gpt-4o' });
        if (response) setAuthenticatedState(true);
    } catch (error) {
        console.error('Puter auth failed:', error);
        alert('Autentikasi Puter gagal atau popup ditutup. Coba izinkan popup lalu ulangi.');
        setAuthenticatedState(false);
    }
}

function bindInterfaceEvents() {
    menuToggleBtn.addEventListener('click', () => sidebar.classList.add('open'));
    sidebarCloseBtn.addEventListener('click', () => sidebar.classList.remove('open'));
    newChatBtn.addEventListener('click', triggerNewSession);
    sidebarAuthBtn.addEventListener('click', handlePuterAuthClick);

    navAgentModeBtn.addEventListener('click', () => {
        closeLeaderboard();
        closeBuildFolder();
        closeSettings();
        sidebar.classList.remove('open');
    });
    navLeaderboardBtn.addEventListener('click', openLeaderboard);
    headerLeaderboardBtn.addEventListener('click', openLeaderboard);
    closeLeaderboardBtn.addEventListener('click', closeLeaderboard);

    navSettingsBtn.addEventListener('click', () => {
        openSettings();
        sidebar.classList.remove('open');
    });
    closeSettingsBtn.addEventListener('click', closeSettings);
    btnCancelSettings.addEventListener('click', closeSettings);
    btnSaveSettings.addEventListener('click', saveSettings);

    headerBuildFolderBtn.addEventListener('click', openBuildFolder);
    closeBuildFolderBtn.addEventListener('click', closeBuildFolder);
    btnClearBuildFolder.addEventListener('click', clearBuildFolder);
    btnExportBuildManifest.addEventListener('click', exportBuildManifest);
    btnResetGateway.addEventListener('click', () => { txtCustomGateway.value = 'https://api.openai.com/v1'; });
    btnCopyTelegramCurl.addEventListener('click', copyTelegramCurlCommand);

    [toggleSearchBtn, toggleSandboxBtn, chatToggleSearchBtn, chatToggleSandboxBtn].forEach(btn => {
        btn.addEventListener('click', function () { this.classList.toggle('active'); });
    });

    [mainPromptArea, chatPromptArea].forEach(textarea => {
        textarea.addEventListener('input', function () {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 180) + 'px';
        });
        textarea.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                if (textarea === mainPromptArea) submitWelcomePrompt();
                else submitChatPrompt();
            }
        });
    });

    mainSendBtn.addEventListener('click', submitWelcomePrompt);
    chatSendBtn.addEventListener('click', submitChatPrompt);

    document.querySelectorAll('.settings-tab-btn').forEach(tabBtn => {
        tabBtn.addEventListener('click', function () {
            document.querySelectorAll('.settings-tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.settings-tab-content').forEach(content => content.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(this.getAttribute('data-tab')).classList.add('active');
        });
    });

    document.querySelectorAll('.template-card').forEach(card => {
        card.addEventListener('click', function () {
            mainPromptArea.value = this.getAttribute('data-prompt');
            mainPromptArea.focus();
            mainPromptArea.dispatchEvent(new Event('input'));
        });
    });

    uploadFileBtn.addEventListener('click', () => fileInputHidden.click());
    chatUploadFileBtn.addEventListener('click', () => fileInputHidden.click());
    fileInputHidden.addEventListener('change', handleFileSelection);

    [settingsOverlay, leaderboardOverlay, buildFolderOverlay].forEach(overlay => {
        overlay.addEventListener('click', function (event) {
            if (event.target !== overlay) return;
            if (overlay === settingsOverlay) closeSettings();
            if (overlay === leaderboardOverlay) closeLeaderboard();
            if (overlay === buildFolderOverlay) closeBuildFolder();
        });
    });

    [chkTelegramEnabled, txtTelegramBotToken, txtTelegramChannelId, txtTelegramGroupId, txtTelegramThreadId, txtTelegramTemplate].forEach(el => {
        el.addEventListener('input', updateTelegramSummary);
        el.addEventListener('change', updateTelegramSummary);
    });
}

function openLeaderboard() {
    closeSettings();
    closeBuildFolder();
    leaderboardOverlay.classList.add('active');
    navLeaderboardBtn.classList.add('active');
    navAgentModeBtn.classList.remove('active');
    navSettingsBtn.classList.remove('active');
}

function closeLeaderboard() {
    leaderboardOverlay.classList.remove('active');
    navLeaderboardBtn.classList.remove('active');
    if (!settingsOverlay.classList.contains('active')) navAgentModeBtn.classList.add('active');
}

function openBuildFolder() {
    closeLeaderboard();
    closeSettings();
    buildFolderOverlay.classList.add('active');
    renderBuildFolderList();
}

function closeBuildFolder() {
    buildFolderOverlay.classList.remove('active');
}

function loadBuildFolder() {
    const stored = localStorage.getItem(settingsStorageKeys.buildFolder);
    if (!stored) {
        buildFolderFiles = [];
        return;
    }
    try {
        buildFolderFiles = JSON.parse(stored);
    } catch (error) {
        console.error('Failed to parse build folder:', error);
        buildFolderFiles = [];
    }
}

function persistBuildFolder() {
    localStorage.setItem(settingsStorageKeys.buildFolder, JSON.stringify(buildFolderFiles));
    renderBuildFolderCount();
    renderBuildFolderList();
}

function renderBuildFolderCount() {
    buildFolderCount.textContent = String(buildFolderFiles.length);
}

function renderBuildFolderList() {
    buildFilesList.innerHTML = '';
    if (!buildFolderFiles.length) {
        buildFilesList.innerHTML = '<div class="folder-empty">Belum ada file di Build Folder.<br>Simpan artifact code dari chat menggunakan tombol <strong>Save to Build</strong>.</div>';
        return;
    }

    buildFolderFiles.slice().sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)).forEach(file => {
        const item = document.createElement('div');
        item.className = 'build-file-item';
        item.innerHTML = `
            <div class="build-file-main">
                <div class="build-file-name">${escapeHtml(file.name)}</div>
                <div class="build-file-meta">
                    <span>${escapeHtml(String(file.language).toUpperCase())}</span>
                    <span>${formatBytes(file.size || 0)}</span>
                    <span>${new Date(file.updatedAt).toLocaleString()}</span>
                </div>
            </div>
            <div class="build-file-actions">
                <button class="folder-action-btn" data-action="preview" data-id="${file.id}">Preview</button>
                <button class="folder-action-btn" data-action="copy" data-id="${file.id}">Copy</button>
                <button class="folder-action-btn" data-action="download" data-id="${file.id}">Download</button>
                <button class="folder-action-btn" data-action="delete" data-id="${file.id}">Delete</button>
            </div>
        `;
        buildFilesList.appendChild(item);
    });

    buildFilesList.querySelectorAll('[data-action]').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const action = btn.getAttribute('data-action');
            if (action === 'preview') previewBuildFile(id);
            if (action === 'copy') copyBuildFile(id);
            if (action === 'download') downloadBuildFile(id);
            if (action === 'delete') deleteBuildFile(id);
        });
    });
}

function saveArtifactToBuild(code, lang) {
    const extension = extensionFromLanguage(lang);
    const suggestedName = `artifact-${Date.now()}.${extension}`;
    const fileName = window.prompt('Nama file untuk Build Folder:', suggestedName);
    if (!fileName) return;
    const normalizedName = fileName.trim();
    const existingIndex = buildFolderFiles.findIndex(file => file.name === normalizedName);
    const payload = {
        id: existingIndex >= 0 ? buildFolderFiles[existingIndex].id : `build_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        name: normalizedName,
        language: lang || 'txt',
        size: new Blob([code]).size,
        content: code,
        updatedAt: new Date().toISOString()
    };
    if (existingIndex >= 0) buildFolderFiles.splice(existingIndex, 1, payload);
    else buildFolderFiles.unshift(payload);
    persistBuildFolder();
    alert(`📁 ${normalizedName} disimpan ke Build Folder.`);
}

function clearBuildFolder() {
    if (!buildFolderFiles.length) return;
    if (!window.confirm('Hapus semua file di Build Folder?')) return;
    buildFolderFiles = [];
    persistBuildFolder();
}

function exportBuildManifest() {
    const manifest = {
        exportedAt: new Date().toISOString(),
        totalFiles: buildFolderFiles.length,
        files: buildFolderFiles.map(file => ({
            name: file.name,
            language: file.language,
            size: file.size,
            updatedAt: file.updatedAt
        }))
    };
    downloadTextFile('build-folder-manifest.json', JSON.stringify(manifest, null, 2), 'application/json');
}

function previewBuildFile(fileId) {
    const file = buildFolderFiles.find(entry => entry.id === fileId);
    if (!file) return;
    const type = file.name.endsWith('.html') ? 'text/html' : 'text/plain';
    const blob = new Blob([file.content], { type });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
}

function copyBuildFile(fileId) {
    const file = buildFolderFiles.find(entry => entry.id === fileId);
    if (!file) return;
    navigator.clipboard.writeText(file.content).then(() => alert(`📋 ${file.name} copied.`));
}

function downloadBuildFile(fileId) {
    const file = buildFolderFiles.find(entry => entry.id === fileId);
    if (!file) return;
    downloadTextFile(file.name, file.content, 'text/plain');
}

function deleteBuildFile(fileId) {
    const file = buildFolderFiles.find(entry => entry.id === fileId);
    if (!file) return;
    if (!window.confirm(`Hapus ${file.name} dari Build Folder?`)) return;
    buildFolderFiles = buildFolderFiles.filter(entry => entry.id !== fileId);
    persistBuildFolder();
}

function copyTelegramCurlCommand() {
    const token = txtTelegramBotToken.value.trim() || '<BOT_TOKEN>';
    const chatId = txtTelegramChannelId.value.trim() || txtTelegramGroupId.value.trim() || '<CHAT_ID>';
    const thread = txtTelegramThreadId.value.trim();
    const message = (txtTelegramTemplate.value.trim() || '🚀 Build {{file}} selesai').replace(/\n/g, '\\n');
    const threadPart = thread ? ` --data-urlencode "message_thread_id=${thread}"` : '';
    const curl = `curl -X POST "https://api.telegram.org/bot${token}/sendMessage" --data-urlencode "chat_id=${chatId}" --data-urlencode "text=${message}"${threadPart}`;
    navigator.clipboard.writeText(curl).then(() => alert('Perintah CURL Telegram berhasil disalin.'));
}

function handleFileSelection(event) {
    if (event.target.files.length > 0) processFiles(event.target.files);
}

function processFiles(filesList) {
    for (let i = 0; i < filesList.length; i += 1) {
        const file = filesList[i];
        const reader = new FileReader();
        reader.onload = function (e) {
            attachedFiles.push({
                name: file.name,
                size: (file.size / 1024).toFixed(1) + ' KB',
                content: e.target.result,
                id: 'file_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8)
            });
            renderAttachedFiles();
        };

        if (file.type.match('text.*') || file.name.match(/\.(js|py|html|css|json|csv|sql|sh|md|txt)$/i)) {
            reader.readAsText(file);
        } else {
            attachedFiles.push({
                name: file.name,
                size: (file.size / 1024).toFixed(1) + ' KB',
                content: `[Binary file content for ${file.name} ignored. Filename used for reference]`,
                id: 'file_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8)
            });
            renderAttachedFiles();
        }
    }
}

function renderAttachedFiles() {
    [attachedFilesContainer, chatAttachedFilesContainer].forEach(container => {
        container.innerHTML = '';
        if (!attachedFiles.length) {
            container.style.display = 'none';
            return;
        }
        container.style.display = 'flex';
        attachedFiles.forEach(file => {
            const badge = document.createElement('div');
            badge.className = 'attached-file-badge';
            badge.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                <span><strong>${escapeHtml(file.name)}</strong> (${file.size})</span>
                <button class="remove-file-btn" onclick="removeAttachedFile('${file.id}')" title="Hapus file">&times;</button>
            `;
            container.appendChild(badge);
        });
    });
}

window.removeAttachedFile = function (fileId) {
    attachedFiles = attachedFiles.filter(file => file.id !== fileId);
    renderAttachedFiles();
};

function submitWelcomePrompt() {
    const message = mainPromptArea.value.trim();
    if (!message || isStreaming) return;
    startNewSession(message);
    mainPromptArea.value = '';
    mainPromptArea.style.height = 'auto';
    executeAgentResponse(message);
}

function submitChatPrompt() {
    const message = chatPromptArea.value.trim();
    if (!message || isStreaming) return;
    chatPromptArea.value = '';
    chatPromptArea.style.height = 'auto';
    executeAgentResponse(message);
}

function startNewSession(firstPrompt) {
    activeSessionId = 'session_' + Date.now();
    const title = firstPrompt.length > 42 ? firstPrompt.slice(0, 42) + '...' : firstPrompt;
    const newSession = {
        id: activeSessionId,
        title,
        agentId: activeAgentId,
        history: [],
        timestamp: new Date().toLocaleString()
    };
    recentSessions.unshift(newSession);
    saveSessionsToLocalStorage();
    renderRecentSessions();
    welcomePanel.style.display = 'none';
    chatPanel.classList.add('active');
    chatMessagesContainer.innerHTML = '';
}

function triggerNewSession() {
    activeSessionId = null;
    chatHistory = [];
    attachedFiles = [];
    renderAttachedFiles();
    welcomePanel.style.display = 'flex';
    chatPanel.classList.remove('active');
    activeThinkingTerminal.style.display = 'none';
    mainPromptArea.value = '';
    mainPromptArea.style.height = 'auto';
    mainPromptArea.focus();
    renderRecentSessions();
}

function loadSessionsFromLocalStorage() {
    const stored = localStorage.getItem(settingsStorageKeys.sessions);
    if (!stored) return;
    try {
        recentSessions = JSON.parse(stored);
        renderRecentSessions();
    } catch (error) {
        console.error('Error parsing sessions:', error);
    }
}

function saveSessionsToLocalStorage() {
    localStorage.setItem(settingsStorageKeys.sessions, JSON.stringify(recentSessions));
}

function renderRecentSessions() {
    recentConversationsList.innerHTML = '';
    if (!recentSessions.length) {
        recentConversationsList.innerHTML = '<div style="font-style: italic; color: var(--color-muted); text-align: center; padding: 12px 0; font-size: 13px;">No recent sessions</div>';
        return;
    }

    recentSessions.forEach(session => {
        const item = document.createElement('div');
        item.className = `convo-item ${session.id === activeSessionId ? 'active' : ''}`;
        item.textContent = session.title;
        item.title = `Agent: ${session.agentId} | ${session.timestamp}`;
        item.addEventListener('click', () => openSession(session.id));
        recentConversationsList.appendChild(item);
    });
}

function openSession(sessionId) {
    const session = recentSessions.find(entry => entry.id === sessionId);
    if (!session) return;
    activeSessionId = sessionId;
    activeAgentId = session.agentId;
    chatHistory = [...session.history];
    selectActiveAgent(activeAgentId);
    welcomePanel.style.display = 'none';
    chatPanel.classList.add('active');
    activeThinkingTerminal.style.display = 'none';
    chatMessagesContainer.innerHTML = '';
    chatHistory.forEach(msg => renderMessageBubble(msg.displayContent || msg.content, msg.role));
    renderRecentSessions();
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
}

async function executeAgentResponse(userText) {
    if (isStreaming) return;

    const activeAgent = puterAgentsList.find(agent => agent.id === activeAgentId) || puterAgentsList[0];
    let fullPrompt = userText;
    if (attachedFiles.length) {
        const contextHeader = attachedFiles.map(file => `--- FILE START: ${file.name} ---\n${file.content}\n--- FILE END ---`).join('\n\n');
        fullPrompt = `Here is the content of the attached context files:\n${contextHeader}\n\nUser prompt:\n${userText}`;
    }

    renderMessageBubble(userText, 'user');
    chatHistory.push({ role: 'user', content: fullPrompt, displayContent: userText });
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

    const generateVideoOutput = (localStorage.getItem(settingsStorageKeys.unlockVideo) !== 'false') && detectVideoIntent(activeAgent, userText);

    showThinkingTerminal(activeAgent.name);
    await appendThinkingStep('Evaluating query complexity with selected frontier agent...');
    if (attachedFiles.length) await appendThinkingStep(`Loaded ${attachedFiles.length} attached context file(s).`);
    if (toggleSearchBtn.classList.contains('active') || chatToggleSearchBtn.classList.contains('active')) {
        await appendThinkingStep('Web Search mode is enabled.');
    }
    if (toggleSandboxBtn.classList.contains('active') || chatToggleSandboxBtn.classList.contains('active')) {
        await appendThinkingStep('Sandbox runtime prepared for code and build tasks.');
    }
    if (localStorage.getItem(settingsStorageKeys.unlimitedUse) !== 'false') {
        await appendThinkingStep('🔓 VIP Unlimited profile active.');
    }
    if (localStorage.getItem(settingsStorageKeys.telegramEnabled) === 'true') {
        await appendThinkingStep('📨 Telegram routing settings detected for channel/group workflow.');
    }
    if (generateVideoOutput) {
        await appendThinkingStep(`🎬 Video generation mode armed for ${activeAgent.name}.`);
    }

    setInputStates(false);

    try {
        isStreaming = true;
        const { bubbleElement } = renderMessageBubble('', 'assistant');
        hideThinkingTerminal();
        let completeText = '';

        const route = resolveCompatibleRoute(activeAgent);
        if (route) {
            for await (const chunk of createOpenAICompatibleStream(route.baseUrl, route.apiKey, route.model, buildConversation(activeAgent))) {
                if (chunk?.text) {
                    completeText += chunk.text;
                    renderFormattedAgentText(completeText, bubbleElement);
                    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
                }
            }
        } else {
            if (activeAgent.providerType === 'anthropic' && localStorage.getItem(settingsStorageKeys.anthropic)) {
                await appendThinkingStep('Anthropic key terdeteksi. Saat ini request tetap lewat Puter fallback untuk stabilitas UI.');
            }
            if (activeAgent.providerType === 'google' && localStorage.getItem(settingsStorageKeys.gemini)) {
                await appendThinkingStep('Google key terdeteksi. Saat ini request tetap lewat Puter fallback untuk stabilitas UI.');
            }
            if (typeof puter === 'undefined') {
                throw new Error('Puter.js belum tersedia di preview ini dan tidak ada direct route yang cocok.');
            }
            const streamResponse = await puter.ai.chat(buildConversation(activeAgent), {
                model: activeAgent.model,
                stream: true
            });
            for await (const chunk of streamResponse) {
                if (chunk?.text) {
                    completeText += chunk.text;
                    renderFormattedAgentText(completeText, bubbleElement);
                    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
                }
            }
        }

        renderFormattedAgentText(completeText, bubbleElement);
        if (generateVideoOutput) appendVideoPreview(userText, bubbleElement, activeAgent.name);

        chatHistory.push({ role: 'assistant', content: completeText });
        const activeSession = recentSessions.find(entry => entry.id === activeSessionId);
        if (activeSession) {
            activeSession.history = [...chatHistory];
            saveSessionsToLocalStorage();
        }

        attachedFiles = [];
        renderAttachedFiles();
    } catch (error) {
        console.error('Error streaming agent output:', error);
        hideThinkingTerminal();
        let errorMsg = error.message || 'Unknown error occurred.';
        if (/auth|unauthorized|authentication/i.test(errorMsg)) {
            errorMsg = 'Authentication required. Silakan autentikasi Puter atau isi API key sesuai provider agent.';
            setAuthenticatedState(false);
        }
        renderMessageBubble(`Encountered error: ${errorMsg}`, 'assistant', true);
        if (chatHistory.length && chatHistory[chatHistory.length - 1].role === 'user') chatHistory.pop();
    } finally {
        isStreaming = false;
        setInputStates(true);
        chatPromptArea.focus();
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    }
}

function buildConversation(activeAgent) {
    return [{ role: 'system', content: activeAgent.systemPrompt }, ...chatHistory.map(msg => ({ role: msg.role, content: msg.content }))];
}

function resolveCompatibleRoute(activeAgent) {
    const openaiKey = localStorage.getItem(settingsStorageKeys.openai) || '';
    const xaiKey = localStorage.getItem(settingsStorageKeys.xai) || '';
    const gateway = (localStorage.getItem(settingsStorageKeys.gateway) || 'https://api.openai.com/v1').replace(/\/$/, '');

    if ((activeAgent.id === 'max' || activeAgent.providerType === 'openai') && openaiKey) {
        return {
            baseUrl: gateway,
            apiKey: openaiKey,
            model: activeAgent.id === 'gpt' ? 'gpt-4o' : 'gpt-4o'
        };
    }

    if (activeAgent.providerType === 'xai' && xaiKey) {
        return {
            baseUrl: 'https://api.x.ai/v1',
            apiKey: xaiKey,
            model: 'grok-4'
        };
    }

    return null;
}

async function* createOpenAICompatibleStream(baseUrl, apiKey, model, messages) {
    const response = await fetch(`${baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({ model, messages, stream: true })
    });

    if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Gateway responded with status ${response.status}: ${errText}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let buffer = '';

    while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
            const cleaned = line.trim();
            if (!cleaned || cleaned === 'data: [DONE]') continue;
            if (!cleaned.startsWith('data: ')) continue;
            try {
                const json = JSON.parse(cleaned.slice(6));
                const text = json.choices?.[0]?.delta?.content;
                if (text) yield { text };
            } catch (error) {
                console.warn('Skipping non-JSON SSE chunk', error);
            }
        }
    }
}

function detectVideoIntent(activeAgent, userText) {
    const text = userText.toLowerCase();
    return ['sora', 'kling', 'runway', 'veo', 'luma'].includes(activeAgent.id)
        || /video|render|buat video|bikin video|motion|cinematic|animasi|storyboard|shot list/.test(text);
}

function appendVideoPreview(userText, bubbleElement, agentName) {
    let videoSourceUrl = 'https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-background-1611-large.mp4';
    const lower = userText.toLowerCase();
    if (/water|sea|ocean|pantai|laut/.test(lower)) {
        videoSourceUrl = 'https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-with-rocks-and-sea-foam-43224-large.mp4';
    } else if (/city|kota|cyberpunk|street/.test(lower)) {
        videoSourceUrl = 'https://assets.mixkit.co/videos/preview/mixkit-time-lapse-of-a-city-at-night-41561-large.mp4';
    } else if (/nature|forest|hutan|pohon/.test(lower)) {
        videoSourceUrl = 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4';
    }

    const videoContainer = document.createElement('div');
    videoContainer.className = 'custom-video-rendered';
    videoContainer.style.marginTop = '15px';
    videoContainer.style.border = '1px solid var(--color-sand)';
    videoContainer.style.borderRadius = '8px';
    videoContainer.style.overflow = 'hidden';
    videoContainer.style.backgroundColor = '#000';
    videoContainer.style.position = 'relative';
    videoContainer.style.boxShadow = '0 8px 24px rgba(0,0,0,0.6)';

    videoContainer.innerHTML = `
        <div style="padding: 10px; background: rgba(11,11,10,0.85); color: var(--color-sand); font-size: 11px; font-weight: bold; position: absolute; top:0; left:0; right:0; z-index: 10; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(223, 159, 40, 0.2); backdrop-filter: blur(4px);">
            <span>🎬 ${agentName.toUpperCase()} VIDEO ENGINE</span>
            <span style="background: var(--color-sand); color: var(--bg-darkest); padding: 2px 6px; border-radius: 4px; font-size: 9px; font-weight: 800;">PREVIEW</span>
        </div>
        <video width="100%" height="auto" controls autoplay loop muted style="display: block; max-height: 400px; object-fit: cover;">
            <source src="${videoSourceUrl}" type="video/mp4">
        </video>
        <div style="padding: 14px; background: var(--bg-darker); border-top: 1px solid var(--border-color); text-align: left;">
            <p style="font-size: 13px; font-weight: 600; color: var(--color-cream); margin-bottom: 4px;">Scene Prompt: <span style="font-weight:500;color:var(--color-sand);font-style:italic;">${escapeHtml(userText.length > 70 ? userText.slice(0, 70) + '...' : userText)}</span></p>
            <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:8px;">
                <span style="font-size:11px;color:var(--color-muted);">🎥 Aspect Ratio: 16:9</span>
                <span style="font-size:11px;color:var(--color-muted);">🔥 Frame Rate: 60 FPS</span>
                <span style="font-size:11px;color:var(--color-muted);">⚡ Render Queue: Simulated Preview</span>
            </div>
        </div>
    `;
    bubbleElement.appendChild(videoContainer);
}

function renderMessageBubble(content, role, isError = false) {
    const row = document.createElement('div');
    row.className = `message-row ${role}`;

    const avatarContainer = document.createElement('div');
    avatarContainer.className = 'message-avatar-container';
    const activeAgent = puterAgentsList.find(agent => agent.id === activeAgentId) || puterAgentsList[0];
    avatarContainer.innerHTML = role === 'user' ? 'U' : activeAgent.icon;

    const body = document.createElement('div');
    body.className = 'message-body';

    const sender = document.createElement('span');
    sender.className = 'message-sender';
    sender.textContent = role === 'user' ? 'You' : activeAgent.name;

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    if (isError) {
        bubble.style.borderColor = '#ef4444';
        bubble.style.color = '#fca5a5';
    }

    if (role === 'assistant' && content) renderFormattedAgentText(content, bubble);
    else bubble.textContent = content;

    body.appendChild(sender);
    body.appendChild(bubble);
    row.appendChild(avatarContainer);
    row.appendChild(body);
    chatMessagesContainer.appendChild(row);
    return { bubbleElement: bubble };
}

function renderFormattedAgentText(rawText, containerElement) {
    containerElement.innerHTML = '';
    const codeRegex = /```(\w*)\n([\s\S]*?)```/g;
    let lastIdx = 0;
    let match;

    while ((match = codeRegex.exec(rawText)) !== null) {
        if (match.index > lastIdx) {
            const textNode = document.createElement('div');
            textNode.style.whiteSpace = 'pre-wrap';
            textNode.textContent = rawText.substring(lastIdx, match.index);
            containerElement.appendChild(textNode);
        }
        const language = match[1] || 'text';
        const codeBody = match[2];
        containerElement.appendChild(createArtifactCanvas(codeBody.trim(), language.trim()));
        lastIdx = match.index + match[0].length;
    }

    if (lastIdx < rawText.length) {
        const textNode = document.createElement('div');
        textNode.style.whiteSpace = 'pre-wrap';
        textNode.textContent = rawText.substring(lastIdx);
        containerElement.appendChild(textNode);
    }

    if (!containerElement.children.length && rawText) {
        const textNode = document.createElement('div');
        textNode.style.whiteSpace = 'pre-wrap';
        textNode.textContent = rawText;
        containerElement.appendChild(textNode);
    }
}

function createArtifactCanvas(code, lang) {
    const wrapper = document.createElement('div');
    wrapper.className = 'artifact-canvas';

    const header = document.createElement('div');
    header.className = 'artifact-header';

    const titleGrp = document.createElement('div');
    titleGrp.className = 'artifact-title-group';
    titleGrp.innerHTML = `<span class="artifact-lang-dot"></span><span class="artifact-title">${lang.toUpperCase()} Sandbox Code</span>`;

    const actions = document.createElement('div');
    actions.className = 'artifact-actions';

    if (lang.toLowerCase() === 'html' || lang.toLowerCase() === 'svg') {
        const viewBtn = document.createElement('button');
        viewBtn.className = 'artifact-btn view-btn';
        viewBtn.textContent = 'Live Preview';
        viewBtn.addEventListener('click', () => {
            const blob = new Blob([code], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            window.open(url, '_blank');
        });
        actions.appendChild(viewBtn);
    }

    const saveBtn = document.createElement('button');
    saveBtn.className = 'artifact-btn';
    saveBtn.textContent = 'Save to Build';
    saveBtn.addEventListener('click', () => saveArtifactToBuild(code, lang));
    actions.appendChild(saveBtn);

    const copyBtn = document.createElement('button');
    copyBtn.className = 'artifact-btn';
    copyBtn.textContent = 'Copy';
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(code).then(() => {
            copyBtn.textContent = 'Copied!';
            setTimeout(() => { copyBtn.textContent = 'Copy'; }, 1200);
        });
    });
    actions.appendChild(copyBtn);

    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'artifact-btn';
    downloadBtn.textContent = 'Download';
    downloadBtn.addEventListener('click', () => {
        downloadTextFile(`arena-sandbox-code.${extensionFromLanguage(lang)}`, code, 'text/plain');
    });
    actions.appendChild(downloadBtn);

    header.appendChild(titleGrp);
    header.appendChild(actions);

    const container = document.createElement('div');
    container.className = 'artifact-code-container';
    const pre = document.createElement('pre');
    const codeElement = document.createElement('code');
    codeElement.textContent = code;
    pre.appendChild(codeElement);
    container.appendChild(pre);

    wrapper.appendChild(header);
    wrapper.appendChild(container);
    return wrapper;
}

function showThinkingTerminal(agentName) {
    thinkingAgentName.textContent = `${agentName} routing steps...`;
    thinkingStepsLogs.innerHTML = '';
    activeThinkingTerminal.style.display = 'block';
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
}

function hideThinkingTerminal() {
    activeThinkingTerminal.style.display = 'none';
}

function appendThinkingStep(text) {
    return new Promise(resolve => {
        const step = document.createElement('div');
        step.className = 'thinking-step';
        step.innerHTML = `<div class="thinking-spinner"></div><span>${escapeHtml(text)}</span>`;
        thinkingStepsLogs.appendChild(step);
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
        setTimeout(() => {
            const spinner = step.querySelector('.thinking-spinner');
            if (spinner) {
                spinner.className = '';
                spinner.textContent = '✓';
                spinner.style.color = '#84cc16';
                spinner.style.fontWeight = 'bold';
                spinner.style.marginRight = '4px';
            }
            resolve();
        }, 600);
    });
}

function setInputStates(enabled) {
    [mainPromptArea, chatPromptArea, mainSendBtn, chatSendBtn, uploadFileBtn, chatUploadFileBtn].forEach(el => {
        if (!el) return;
        el.disabled = !enabled;
        el.style.opacity = enabled ? '1' : '0.5';
        el.style.pointerEvents = enabled ? 'auto' : 'none';
    });
}

function extensionFromLanguage(lang) {
    const map = {
        javascript: 'js',
        js: 'js',
        python: 'py',
        py: 'py',
        html: 'html',
        css: 'css',
        json: 'json',
        csv: 'csv',
        shell: 'sh',
        bash: 'sh',
        sql: 'sql',
        markdown: 'md',
        md: 'md',
        text: 'txt'
    };
    return map[String(lang || '').toLowerCase()] || 'txt';
}

function formatBytes(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function downloadTextFile(filename, content, type) {
    const blob = new Blob([content], { type });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}

function escapeHtml(value) {
    return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
