// Dados (Baseados no site base fmxdigital.com.br)
const categoriasRaw = [
    { nome: "Estratégia", itens: ["Diagnóstico de presença digital", "Posicionamento e proposta de valor", "Persona e jornada do cliente", "Mensagem central (pitch)", "Estratégia de conteúdo", "Estratégia de funil", "Estratégia de ofertas", "Planejamento de campanhas", "Plano de conversão (CRO)", "Mentoria/consultoria"] },
    { nome: "Gestão de Redes Sociais", itens: ["Planejamento mensal", "Pauta/calendário editorial", "Legendas (copy)", "Design de posts", "Carrosséis", "Stories", "Capas de Reels/padronização", "Publicação/agendamento", "Comunidade (se no escopo)", "Relatórios"] },
    { nome: "Conteúdo", itens: ["Posts estáticos (pacote)", "Carrosséis (pacote)", "Reels (pacote)", "Roteiros curtos", "Roteiros longos (YouTube/VSL)", "Legendas prontas", "Banco de ganchos/ideias", "Revisão/otimização de conteúdo", "Templates Canva (kits)"] },
    { nome: "Design & Branding", itens: ["Identidade visual", "Manual de marca", "Key visual", "Kit social (templates)", "Criativos para anúncios", "Artes para WhatsApp", "Apresentação comercial", "Proposta comercial / mídia kit", "Capas (destaques/YouTube/Reels)"] },
    { nome: "Vídeo", itens: ["Edição Reels/TikTok", "Legendas dinâmicas", "Motion simples", "Vinheta curta", "Tratamento de cor/áudio (básico)", "Cortes de longos para shorts", "Thumbnails/capas", "Conteúdo do mês"] },
    { nome: "Tráfego Pago / Performance", itens: ["Estrutura de campanha (Meta/Google)", "Criativos para anúncios", "Copy de anúncios", "Pixel/eventos (Meta)", "Tag Manager (tags)", "Campanha WhatsApp", "Captação de leads", "Remarketing", "Otimização e testes", "Relatório de mídia + plano"] },
    { nome: "SEO", itens: ["Auditoria SEO", "SEO local (Google Perfil da Empresa)", "Otimização on-page", "Artigos para blog (otimizados)", "Cluster de conteúdo", "Pesquisa de palavras-chave", "Linkagem interna/organização"] },
    { nome: "Sites / Landing Pages", itens: ["Landing de captação", "Landing de vendas", "Site institucional", "One-page", "Página link na bio", "Otimização de página (CRO)", "Integrações form → e-mail/CRM/WhatsApp", "Manutenção"] },
    { nome: "Automações", itens: ["Setup WhatsApp Business", "Fluxo/roteiro de atendimento", "Respostas automáticas (DM/WhatsApp) por palavra-chave", "Captura/distribuição de leads", "Sequência de follow-up", "Recuperação de interessados", "Pós-venda automatizado", "Agendamento automatizado"] },
    { nome: "Funil, CRM e Vendas", itens: ["Estruturação do funil comercial", "Implementação de CRM", "Treinamento CRM/rotina", "Scripts de vendas (WhatsApp/DM)", "Proposta + follow-up", "Pipeline + relatórios"] },
    { nome: "Autoridade", itens: ["Posicionamento de especialista", "Linha editorial de autoridade", "Copy para lives/aulas", "Storytelling de cases", "Organização de portfólio", "Preparação de oferta premium"] },
    { nome: "Dados e Rotina", itens: ["Reunião semanal/quinzenal", "Painel de métricas (KPI)", "Relatório mensal", "Gestão de calendário (conteúdo + campanhas)", "Rotina de testes"] }
];

const dados = {
    packInicial: {
        titulo: "Pack de Conteúdo Inicial",
        descricao: "O ponto de partida seguro. Ideal para quem ainda não iniciou no digital ou já tentou e não teve os resultados desejados.",
        beneficios: [
            "Diagnóstico estratégico inicial",
            "Otimização completa do perfil",
            "6 peças de conteúdo profissional",
            "Mini site de conversão",
            "Identidade visual exclusiva",
            "1 rodada de ajustes",
            "Suporte por 7 dias pós-entrega"
        ]
    },
    catalogoServicos: categoriasRaw.map(cat => ({
        categoria: cat.nome,
        servicos: cat.itens.map(item => ({
            titulo: item,
            descricao: `Solução estratégica de ${item.toLowerCase()} para alavancar seus resultados no digital.`,
            tags: [cat.nome.split(' ')[0], "Avulso"],
            bullets: ["Foco em conversão", "Entrega ágil", "Alta qualidade"]
        }))
    })),
    gerenciamento: [
        {
            id: "pro",
            nome: "Plano Pro",
            descricao: "Para empresas que buscam consistência e crescimento contínuo.",
            features: [
                "Gestão de redes sociais",
                "Criação de conteúdo mensal",
                "Relatórios de desempenho",
                "Suporte especializado"
            ]
        },
        {
            id: "premium",
            nome: "Plano Premium",
            descricao: "Escopo ampliado para dominar o mercado digital.",
            features: [
                "Tudo do plano Pro",
                "Gestão de tráfego pago avançada",
                "Prioridade no atendimento",
                "Estratégias de SEO completas",
                "Consultoria dedicada"
            ]
        }
    ],
    equipe: [
        {
            nome: "Bruno Xavier",
            cargo: "Diretor de Projetos",
            descricao: "Especialista em guiar projetos do zero ao sucesso, garantindo entregas ágeis e resultados excepcionais.",
            imagem: "/bruno.png"
        },
        {
            nome: "Priscila Falcão",
            cargo: "Diretora de Conteúdos",
            descricao: "Responsável por criar narrativas envolventes e estratégias de conteúdo que conectam marcas a pessoas.",
            imagem: "/priscila.jpg"
        },
        {
            nome: "Hebert Mendonça",
            cargo: "Diretor de Desenvolvimento",
            descricao: "Lidera a criação de soluções tecnológicas robustas, sites e landing pages de alta conversão.",
            imagem: "/hebert.png"
        }
    ]
};

// Renderização Dinâmica
document.addEventListener('DOMContentLoaded', () => {
    renderPackInicial();
    renderServicos();
    renderGerenciamento();
    renderEquipe();
    setupCarousels();
    setupModal();
    setupMobileMenu();
    setupForm();
    initStarfield();
});

function renderPackInicial() {
    const container = document.getElementById('pack-container');
    const html = `
        <div class="pack-text">
            <h3>${dados.packInicial.titulo}</h3>
            <p class="mb-4" style="margin-bottom: 1rem;">${dados.packInicial.descricao}</p>
            <ul>
                ${dados.packInicial.beneficios.map(b => `<li>${b}</li>`).join('')}
            </ul>
            <div class="mt-4">
                <a href="https://pack.fmxdigital.com.br/" target="_blank" class="btn btn-primary cyber-btn">Quero o Pack Inicial</a>
            </div>
        </div>
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/gamer-boy-5692601-4743371.png" alt="Gamer Avatar" class="pack-avatar" crossorigin="anonymous">
    `;
    container.innerHTML = html;
}

function renderServicos() {
    const container = document.getElementById('catalogo-container');
    const html = dados.catalogoServicos.map((categoria, index) => `
        <div class="category-folder">
            <button class="folder-header" onclick="toggleFolder(${index})" id="folder-btn-${index}">
                <div class="folder-title-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cyan-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    <h3 class="category-title">${categoria.categoria}</h3>
                </div>
                <span class="folder-toggle" id="folder-icon-${index}">+</span>
            </button>
            <div class="folder-content" id="folder-content-${index}">
                <div class="carousel-wrapper">
                    <button class="carousel-btn prev" aria-label="Anterior">&#10094;</button>
                    <div class="carousel" role="region" aria-label="Carrossel de ${categoria.categoria}" tabindex="0">
                        ${categoria.servicos.map(servico => `
                            <div class="card" tabindex="0">
                                <h3>${servico.titulo}</h3>
                                <p>${servico.descricao}</p>
                                <div class="card-tags">
                                    ${servico.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
                                </div>
                                <ul class="card-bullets">
                                    ${servico.bullets.map(b => `<li>${b}</li>`).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                    <button class="carousel-btn next" aria-label="Próximo">&#10095;</button>
                </div>
            </div>
        </div>
    `).join('');
    container.innerHTML = html;
    
    // Re-attach carousel events because we just recreated the DOM
    setupCarousels();
}

window.toggleFolder = function(index) {
    const content = document.getElementById(`folder-content-${index}`);
    const icon = document.getElementById(`folder-icon-${index}`);
    const btn = document.getElementById(`folder-btn-${index}`);
    
    if (content.classList.contains('active')) {
        content.classList.remove('active');
        icon.textContent = '+';
        btn.classList.remove('active');
    } else {
        content.classList.add('active');
        icon.textContent = '-';
        btn.classList.add('active');
    }
}

function renderGerenciamento() {
    const container = document.getElementById('planos-container');
    const html = dados.gerenciamento.map(plano => `
        <div class="plan-card ${plano.id === 'premium' ? 'premium' : ''}">
            <h3>${plano.nome}</h3>
            <p class="text-gray">${plano.descricao}</p>
            <ul>
                ${plano.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
            <a href="https://forms.fmxdigital.com.br/briefing-pack/" target="_blank" class="btn ${plano.id === 'premium' ? 'btn-primary' : 'btn-secondary'} cyber-btn w-full mt-4">Quero gerenciamento</a>
        </div>
    `).join('');
    container.innerHTML = html;
}

function renderEquipe() {
    const container = document.getElementById('equipe-grid');
    const html = dados.equipe.map((membro, index) => {
        const fotoHtml = membro.imagem 
            ? `<img src="${membro.imagem}" alt="Foto de ${membro.nome}" class="team-photo-img">`
            : `<div class="team-photo">${membro.nome.charAt(0)}</div>`;
            
        return `
        <div class="card team-card" tabindex="0" data-index="${index}">
            <div class="team-photo-container">
                ${fotoHtml}
            </div>
            <h3>${membro.nome}</h3>
            <p class="team-role">${membro.cargo}</p>
            <p class="text-sm">${membro.descricao.substring(0, 60)}...</p>
        </div>
    `}).join('');
    container.innerHTML = html;
}

// Lógica de Carrossel (Netflix style)
function setupCarousels() {
    const wrappers = document.querySelectorAll('.carousel-wrapper');
    
    wrappers.forEach(wrapper => {
        const carousel = wrapper.querySelector('.carousel');
        const prevBtn = wrapper.querySelector('.prev');
        const nextBtn = wrapper.querySelector('.next');
        
        const scrollAmount = 300;

        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        // Suporte a teclado
        carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        });
    });
}

// Modal Equipe
function setupModal() {
    const modal = document.getElementById('team-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-modal');
    
    document.getElementById('equipe-grid').addEventListener('click', (e) => {
        const card = e.target.closest('.team-card');
        if (!card) return;
        
        const index = card.getAttribute('data-index');
        const membro = dados.equipe[index];
        
        const fotoHtml = membro.imagem 
            ? `<img src="${membro.imagem}" alt="Foto de ${membro.nome}" class="team-photo-img" style="width: 100%; height: 100%; object-fit: cover;">`
            : `<div class="team-photo mx-auto" style="margin: 0 auto 1rem;">${membro.nome.charAt(0)}</div>`;

        modalBody.innerHTML = `
            <div class="text-center">
                <div class="team-photo-container mx-auto" style="width: 120px; height: 120px; margin: 0 auto 1rem; border-radius: 50%; overflow: hidden; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); display: flex; align-items: center; justify-content: center;">
                    ${fotoHtml}
                </div>
                <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">${membro.nome}</h3>
                <p style="color: var(--secondary-color); margin-bottom: 1rem;">${membro.cargo}</p>
                <p>${membro.descricao}</p>
            </div>
        `;
        
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
    });

    const closeModal = () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Menu Mobile
function setupMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const links = nav.querySelectorAll('a');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
}

// Form Validation
function setupForm() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.textContent;
        
        btn.textContent = 'Enviando...';
        btn.disabled = true;
        
        // Simula envio
        setTimeout(() => {
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            form.reset();
            btn.textContent = originalText;
            btn.disabled = false;
        }, 1500);
    });
}

// Background Animado (Starfield Canvas)
function initStarfield() {
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let stars = [];
    
    // Verifica prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const speedMultiplier = prefersReducedMotion ? 0.1 : 0.5;

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        initStars();
    }

    function initStars() {
        stars = [];
        const numStars = Math.floor((width * height) / 2000); // Densidade
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.5,
                speed: (Math.random() * 0.5 + 0.1) * speedMultiplier,
                alpha: Math.random()
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
            ctx.fill();
            
            // Movimento sutil para cima
            star.y -= star.speed;
            
            // Piscar suave (aumentado)
            star.alpha += (Math.random() - 0.5) * 0.2;
            if (star.alpha < 0.1) star.alpha = 0.1;
            if (star.alpha > 1) star.alpha = 1;

            // Reposicionar se sair da tela
            if (star.y < 0) {
                star.y = height;
                star.x = Math.random() * width;
            }
        });
        
        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    resize();
    draw();
}

function setupAudio() {
    const audio = document.getElementById('bg-audio');
    const toggleBtn = document.getElementById('music-toggle');
    const iconOn = document.getElementById('music-icon-on');
    const iconOff = document.getElementById('music-icon-off');
    
    if (!audio || !toggleBtn) return;
    
    audio.volume = 0.15; // Volume baixo para não atrapalhar

    let isPlaying = false;

    toggleBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            iconOn.style.display = 'none';
            iconOff.style.display = 'block';
        } else {
            audio.play().catch(e => console.log("Audio play failed:", e));
            iconOn.style.display = 'block';
            iconOff.style.display = 'none';
        }
        isPlaying = !isPlaying;
    });

    // Tenta tocar no primeiro clique do usuário na página
    document.body.addEventListener('click', function firstInteraction() {
        if (!isPlaying) {
            audio.play().then(() => {
                isPlaying = true;
                iconOn.style.display = 'block';
                iconOff.style.display = 'none';
            }).catch(e => console.log("Autoplay bloqueado pelo navegador"));
        }
        document.body.removeEventListener('click', firstInteraction);
    }, { once: true });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderPackInicial();
    renderServicos();
    renderGerenciamento();
    renderEquipe();
    setupCarousels();
    setupModal();
    setupMobileMenu();
    setupForm();
    initStarfield();
    setupAudio();
    setupWhatsAppBot();
});

function setupWhatsAppBot() {
    const toggleBtn = document.getElementById('whatsapp-toggle');
    const chatBox = document.getElementById('whatsapp-chat');
    const closeBtn = document.getElementById('close-whatsapp');
    const messagesContainer = document.getElementById('whatsapp-messages');
    const chatOptions = document.querySelectorAll('.chat-option');

    const botResponses = {
        servicos: "Oferecemos diversos serviços como: Identidade Visual, Landing Pages, Gestão de Tráfego, Social Media e muito mais! Você pode ver o catálogo completo na seção 'Serviços Avulsos'.",
        precos: "Nossos preços variam de acordo com a necessidade do seu projeto. Temos o Pack Inicial a partir de R$ 997 e planos de gerenciamento mensal. Para um orçamento exato, fale com um especialista!",
        pack: "O Pack Inicial é perfeito para quem está começando! Inclui diagnóstico, otimização de perfil, 6 posts, mini site e identidade visual. Entregamos tudo pronto para você usar.",
        humano: "Ótimo! Vou te transferir para um de nossos especialistas no WhatsApp."
    };

    const whatsappNumber = "5511999999999"; // Substitua pelo número real

    toggleBtn.addEventListener('click', () => {
        chatBox.classList.toggle('hidden');
    });

    closeBtn.addEventListener('click', () => {
        chatBox.classList.add('hidden');
    });

    chatOptions.forEach(option => {
        option.addEventListener('click', function() {
            const questionType = this.getAttribute('data-question');
            const questionText = this.innerText;

            // Remove options
            const optionsContainer = document.querySelector('.chat-options');
            if (optionsContainer) optionsContainer.remove();

            // Add user message
            addMessage(questionText, 'user-message');

            // Simulate typing delay
            setTimeout(() => {
                addMessage(botResponses[questionType], 'bot-message');
                
                // Add WhatsApp link button after response
                setTimeout(() => {
                    const linkHtml = `<a href="https://wa.me/${whatsappNumber}?text=Olá! Vim pelo site e gostaria de saber mais sobre: ${encodeURIComponent(questionText)}" target="_blank" class="whatsapp-link-btn">Falar no WhatsApp</a>`;
                    const msgDiv = document.createElement('div');
                    msgDiv.innerHTML = linkHtml;
                    messagesContainer.appendChild(msgDiv);
                    messagesContainer.scrollTop = messagesContainer.scrollHeight;
                }, 500);

            }, 800);
        });
    });

    function addMessage(text, className) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${className}`;
        msgDiv.innerText = text;
        messagesContainer.appendChild(msgDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}