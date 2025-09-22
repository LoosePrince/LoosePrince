// 主题设置 - 在页面加载前检查
(function() {
    // 检查本地存储中是否有主题偏好
    const savedTheme = localStorage.getItem('theme');
    const isDarkMode = savedTheme === 'dark' || 
                      (savedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    // 应用主题
    if (isDarkMode) {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
    }
})();

// 时间轴内容数据
const timelineData = [
    {
        year: "2020",
        title: "UI设计专业",
        description: "进入某职业学校学习UI设计（校企合作），开始接触设计原则和用户界面交互。通过专业学习，我开始了解设计对用户体验的重要性，并培养自己的设计思维。",
        skills: ["UI设计", "Photoshop", "创意思维"],
        images: [
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        achievements: [
            "完成第一个UI设计项目",
            "学习使用设计软件的基础功能",
            "理解用户体验设计的核心理念"
        ]
    },
    {
        year: "2022",
        title: "运营支持实习",
        description: "在某科技公司进行运营支持实习，积累新媒体运营工作经验。这次实习让我有机会接触真实的商业项目，学习项目流程和团队协作。",
        skills: ["新媒体运营", "项目策划", "客户服务", "团队协作"],
        images: [
            "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1558346547-4439467bd1d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        achievements: [
            "参与商业项目运营",
            "学习项目流程管理",
            "提升团队协作能力"
        ]
    },
    {
        year: "2023",
        title: "UI设计毕业",
        description: "完成中专学业，UI设计作品参展。这个阶段让我有机会展示自己的设计能力，并通过作品参展获得了更多认可。",
        skills: ["UI设计", "作品展示", "设计思维", "创意表达"],
        images: [
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        achievements: [
            "UI设计作品参展",
            "完成中专学业",
            "获得设计认可"
        ]
    },
    {
        year: "2023",
        title: "Web前端开发",
        description: "进入某职业学院，学习Web前端开发。在大学里，我不仅继续深化专业知识，还积极参与各种社团活动和项目实践，拓展视野，培养综合能力。",
        skills: ["前端开发", "学习能力", "时间管理", "团队合作"],
        images: [
            "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        achievements: [
            "适应新的学习环境",
            "参与校园活动",
            "建立新的社交圈"
        ]
    },
    {
        year: "2024",
        title: "前端竞赛获奖",
        description: "多次获得前端开发竞赛奖项。这些竞赛让我有机会展示自己的技术能力，也让我了解了协作开发的流程和规范，提高了代码质量和版本控制技能。",
        skills: ["前端开发", "竞赛经验", "技术展示", "团队协作"],
        images: [
            "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1558346547-4439467bd1d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        achievements: [
            "多次获得前端开发竞赛奖项",
            "提升技术展示能力"
        ]
    },
    {
        year: "2024",
        title: "全栈项目开发",
        description: "开发游戏服务器官网、博客网站、聊天网站等项目。我学习了后端技术，结合前端知识，构建了完整的Web应用。这个过程中，我掌握了数据库设计、API开发和服务器部署等技能。",
        skills: ["Node.js", "Vue", "PHP", "MySQL", "PostgreSQL", "全栈开发"],
        images: [
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        achievements: [
            "开发多个全栈项目",
            "掌握多种技术栈",
            "学习云服务部署和维护"
        ]
    },
    {
        year: "未来",
        title: "持续成长",
        description: "不断探索新技术与设计趋势，追求创意与技术的完美结合。我计划深入研究前沿技术领域，如Web3、AI生成式设计等，同时继续提升项目管理和团队协作能力。",
        skills: ["终身学习", "前沿技术", "创新思维", "跨领域整合"],
        images: [
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1504270997636-07ddfbd48945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        achievements: [
            "成为跨领域的创新者",
            "培养独特的个人品牌",
            "为社区作出有意义的贡献"
        ]
    }
];

// 等待页面完全加载
document.addEventListener('DOMContentLoaded', () => {
    // 初始化GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // 页面加载动画
    setTimeout(() => {
        document.getElementById('loading-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('content').style.opacity = '1';
            
            // 显示音乐播放器
            setTimeout(() => {
                const musicPlayer = document.getElementById('music-player');
                musicPlayer.style.opacity = '1';
                musicPlayer.style.transform = 'translateY(0)';
            }, 500);
            
            // 初始动画
            initAnimations();
        }, 500);
    }, 2000);
    
    // 初始化主题切换按钮
    initThemeToggle();
    
    // 滚动事件
    window.addEventListener('scroll', () => {
        // 返回顶部按钮显示/隐藏
        const backToTopBtn = document.getElementById('back-to-top');
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = '1';
        } else {
            backToTopBtn.style.opacity = '0';
        }
        
        // 滚动显示
        revealOnScroll();
    });
    
    // 返回顶部按钮点击事件
    document.getElementById('back-to-top').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 复制按钮点击事件
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const textToCopy = btn.getAttribute('data-text');
            navigator.clipboard.writeText(textToCopy).then(() => {
                btn.classList.add('copied');
                btn.innerHTML = '<i class="fas fa-check"></i>';
                
                setTimeout(() => {
                    btn.classList.remove('copied');
                    btn.innerHTML = '<i class="far fa-copy"></i>';
                }, 2000);
            });
        });
    });
    
    // 初始化技能进度条原始数据
    initSkillBars();
    
    // 技能选项卡切换
    const skillTabBtns = document.querySelectorAll('.skill-tab-btn');
    if (skillTabBtns.length > 0) {
        skillTabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // 移除所有活动状态
                skillTabBtns.forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.skill-tab-pane').forEach(pane => pane.classList.remove('active'));
                
                // 添加当前活动状态
                btn.classList.add('active');
                const tabType = btn.getAttribute('data-tab');
                document.getElementById(`${tabType}-tab`).classList.add('active');
                
                // 触发技能进度条动画
                animateSkillBars();
            });
        });
    }
    
    // 游戏卡片悬停交互
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            gameCards.forEach(c => {
                if (c !== card) {
                    c.style.opacity = '0.6';
                }
            });
        });
        
        card.addEventListener('mouseout', () => {
            gameCards.forEach(c => {
                c.style.opacity = '1';
            });
        });
    });
    
    // 音乐播放器按钮点击事件
    const toggleBtn = document.getElementById('toggle-play');
    toggleBtn.addEventListener('click', () => {
        // 滚动到音乐部分
        const musicSection = document.getElementById('music-section');
        if (musicSection) {
            musicSection.scrollIntoView({ behavior: 'smooth' });
            
            // 添加闪烁效果
            musicSection.classList.add('pulse-animation');
            setTimeout(() => {
                musicSection.classList.remove('pulse-animation');
            }, 1500);
        }
    });
    
    // 初始化时间轴交互
    initTimelineInteraction();
    
    // 初始化音乐播放器
    initMusicPlayer();

    // 作品展示标签页切换
    const workTabBtns = document.querySelectorAll('.work-tab-btn');
    const workTabPanes = document.querySelectorAll('.work-tab-pane');

    workTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除所有按钮的active类
            workTabBtns.forEach(b => b.classList.remove('active'));
            // 添加当前按钮的active类
            btn.classList.add('active');

            // 隐藏所有内容面板
            workTabPanes.forEach(pane => pane.classList.remove('active'));
            // 显示对应的内容面板
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
});

// 初始化时间轴交互
function initTimelineInteraction() {
    // 获取所有时间轴项
    const timelineItems = document.querySelectorAll('.timeline-item, .timeline-item-branch');
    const modal = document.getElementById('timeline-modal');
    
    if (!timelineItems.length || !modal) return;
    
    // 为每个时间轴项添加点击事件
    timelineItems.forEach(item => {
        item.addEventListener('click', () => {
            // 获取年份
            const yearEl = item.querySelector('.timeline-date');
            const titleEl = item.querySelector('h3');
            
            if (!yearEl || !titleEl) return;
            
            const year = yearEl.textContent.trim();
            const title = titleEl.textContent.trim();
            
            // 从数据中找到对应项
            const timelineItem = timelineData.find(data => 
                data.year === year && data.title === title
            );
            
            if (!timelineItem) return;
            
            // 设置当前激活项
            timelineItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            // 填充模态框内容
            fillTimelineModal(timelineItem);
            
            // 显示模态框
            modal.classList.add('active');
            
            // 添加随机出现的视觉效果
            addTimelineVisualEffects(item);
        });
    });
    
    // 关闭模态框
    const closeBtn = modal.querySelector('.timeline-detail-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            // 移除所有激活状态
            timelineItems.forEach(item => item.classList.remove('active'));
        });
    }
    
    // 点击模态框外部关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            // 移除所有激活状态
            timelineItems.forEach(item => item.classList.remove('active'));
        }
    });
    
    // 按ESC键关闭模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            // 移除所有激活状态
            timelineItems.forEach(item => item.classList.remove('active'));
        }
    });
    
    // 鼠标悬停动画效果
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // 添加脉冲效果到时间点
            const dot = item.querySelector('.timeline-dot');
            if (dot) {
                dot.style.transform = 'scale(1.5)';
                dot.style.boxShadow = '0 0 15px rgba(139, 92, 246, 0.6)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            // 移除效果（如果不是激活项）
            if (!item.classList.contains('active')) {
                const dot = item.querySelector('.timeline-dot');
                if (dot) {
                    dot.style.transform = '';
                    dot.style.boxShadow = '';
                }
            }
        });
    });
}

// 填充时间轴模态框内容
function fillTimelineModal(data) {
    const modal = document.getElementById('timeline-modal');
    if (!modal) return;
    
    // 设置年份
    const yearEl = modal.querySelector('.timeline-detail-year');
    if (yearEl) yearEl.textContent = data.year;
    
    // 设置标题
    const titleEl = modal.querySelector('.timeline-detail-title');
    if (titleEl) titleEl.textContent = data.title;
    
    // 设置描述
    const descriptionEl = modal.querySelector('.timeline-detail-description');
    if (descriptionEl) descriptionEl.textContent = data.description;
    
    // 设置技能标签
    const skillsContainer = modal.querySelector('.timeline-detail-skills');
    if (skillsContainer) {
        skillsContainer.innerHTML = '';
        
        if (data.skills && data.skills.length) {
            data.skills.forEach(skill => {
                const skillEl = document.createElement('span');
                skillEl.className = 'timeline-detail-skill';
                skillEl.textContent = skill;
                skillsContainer.appendChild(skillEl);
            });
        }
    }
    
    // 设置图片
    const imagesContainer = modal.querySelector('.timeline-detail-images');
    if (imagesContainer) {
        imagesContainer.innerHTML = '';
        
        if (data.images && data.images.length) {
            data.images.forEach(imgSrc => {
                const imgContainer = document.createElement('div');
                imgContainer.className = 'timeline-detail-image';
                
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = data.title;
                img.loading = 'lazy';
                
                imgContainer.appendChild(img);
                imagesContainer.appendChild(imgContainer);
            });
        }
    }
    
    // 设置成就列表
    const achievementsList = modal.querySelector('.timeline-detail-achievements ul');
    if (achievementsList) {
        achievementsList.innerHTML = '';
        
        if (data.achievements && data.achievements.length) {
            data.achievements.forEach(achievement => {
                const li = document.createElement('li');
                li.textContent = achievement;
                achievementsList.appendChild(li);
            });
        }
    }
}

// 添加时间轴视觉效果
function addTimelineVisualEffects(item) {
    // 创建并添加粒子效果
    const dot = item.querySelector('.timeline-dot');
    if (dot) {
        const rect = dot.getBoundingClientRect();
        
        // 创建5-10个粒子
        const particleCount = Math.floor(Math.random() * 6) + 5;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            
            // 设置基本样式
            particle.style.position = 'fixed';
            particle.style.width = `${Math.random() * 6 + 2}px`;
            particle.style.height = particle.style.width;
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = getRandomColor();
            particle.style.top = `${rect.top + rect.height/2}px`;
            particle.style.left = `${rect.left + rect.width/2}px`;
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '50';
            
            // 添加到页面
            document.body.appendChild(particle);
            
            // 设置动画
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 60 + 20;
            const duration = Math.random() * 1000 + 1000;
            
            // 使用GSAP动画
            gsap.to(particle, {
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance,
                opacity: 0,
                duration: duration / 1000,
                onComplete: () => {
                    // 动画完成后移除粒子
                    document.body.removeChild(particle);
                }
            });
        }
    }
}

// 获取随机颜色
function getRandomColor() {
    const colors = [
        '#ec4899', // 粉红色
        '#8b5cf6', // 紫色
        '#3b82f6', // 蓝色
        '#10b981', // 绿色
        '#f59e0b'  // 黄色
    ];
    
    return colors[Math.floor(Math.random() * colors.length)];
}

// 初始化主题切换功能
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');
    
    // 根据当前主题设置初始图标状态
    if (document.documentElement.classList.contains('dark')) {
        sunIcon.style.opacity = '0';
        sunIcon.style.transform = 'rotate(360deg) scale(0)';
        sunIcon.style.position = 'absolute';
        moonIcon.style.opacity = '1';
        moonIcon.style.transform = 'rotate(0) scale(1)';
    } else {
        moonIcon.style.opacity = '0';
        moonIcon.style.transform = 'rotate(-360deg) scale(0)';
        moonIcon.style.position = 'absolute';
        sunIcon.style.opacity = '1';
        sunIcon.style.transform = 'rotate(0) scale(1)';
    }
    
    // 点击切换主题
    themeToggle.addEventListener('click', () => {
        // 切换类名
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            localStorage.setItem('theme', 'light');
            
            // 切换图标 - 月亮变太阳
            moonIcon.style.opacity = '0';
            moonIcon.style.transform = 'rotate(-360deg) scale(0)';
            setTimeout(() => {
                moonIcon.style.position = 'absolute';
                sunIcon.style.position = 'static';
                sunIcon.style.opacity = '1';
                sunIcon.style.transform = 'rotate(0) scale(1)';
            }, 200);
        } else {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            
            // 切换图标 - 太阳变月亮
            sunIcon.style.opacity = '0';
            sunIcon.style.transform = 'rotate(360deg) scale(0)';
            setTimeout(() => {
                sunIcon.style.position = 'absolute';
                moonIcon.style.position = 'static';
                moonIcon.style.opacity = '1';
                moonIcon.style.transform = 'rotate(0) scale(1)';
            }, 200);
        }
        
        // 重置技能条动画
        setTimeout(animateSkillBars, 500);
    });
}

// 初始化技能进度条原始数据
function initSkillBars() {
    // 存储所有进度条的目标宽度
    document.querySelectorAll('.skill-progress-bar').forEach(bar => {
        // 获取内联样式的宽度
        const inlineWidth = bar.style.width;
        // 保存目标宽度为数据属性
        bar.setAttribute('data-target-width', inlineWidth || bar.parentElement.querySelector('.text-gray-500').textContent.trim());
        // 初始设置为0
        bar.style.width = '0';
    });
}

// 初始动画函数
function initAnimations() {
    // 欢迎部分动画
    const welcomeItems = document.querySelectorAll('#welcome .reveal-item');
    welcomeItems.forEach((item, index) => {
        gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2 * index
        });
    });
    
    // 为各部分设置滚动触发器
    gsap.utils.toArray('.reveal-section').forEach((section) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "top 50%",
                toggleClass: {targets: section, className: "active"},
                once: true,
                onEnter: () => {
                    // 如果是技能部分，触发技能条动画
                    if (section.id === 'skills') {
                        setTimeout(animateSkillBars, 500);
                    }
                }
            }
        });
    });
}

// 滚动显示函数
function revealOnScroll() {
    const sections = document.querySelectorAll('.reveal-section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.8) {
            section.classList.add('active');
            
            // 如果是技能部分，触发技能条动画
            if (section.id === 'skills' && !section.classList.contains('skills-animated')) {
                section.classList.add('skills-animated');
                setTimeout(animateSkillBars, 500);
            }
        }
    });
}

// 技能进度条动画
function animateSkillBars() {
    const activePane = document.querySelector('.skill-tab-pane.active');
    if (activePane) {
        const skillBars = activePane.querySelectorAll('.skill-progress-bar');
        skillBars.forEach(bar => {
            // 从数据属性获取目标宽度
            const targetWidth = bar.getAttribute('data-target-width');
            if (targetWidth) {
                // 重置为0再动画到目标值
                bar.style.width = '0';
                requestAnimationFrame(() => {
                    setTimeout(() => {
                        bar.style.width = targetWidth;
                    }, 50);
                });
            }
        });
    }
}

// 粒子背景效果
function createParticles() {
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    
    // 创建粒子
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1,
            color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.3)`,
            speedX: Math.random() * 1 - 0.5,
            speedY: Math.random() * 1 - 0.5
        });
    }
    
    // 绘制和更新粒子
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            
            // 更新位置
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // 边界检查
            if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// 窗口调整大小
window.addEventListener('resize', () => {
    // 重新调整动画和布局
});

// 启动粒子背景
createParticles();

// 音乐播放器功能
function initMusicPlayer() {
    const audio = new Audio('https://music.163.com/song/media/outer/url?id=2612489941.mp3');
    const playPauseBtn = document.getElementById('play-pause');
    const progressBar = document.getElementById('progress-bar');
    const progressHandle = document.getElementById('progress-handle');
    const progressContainer = document.getElementById('progress-container');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const togglePlayBtn = document.getElementById('toggle-play');
    const scrollToMusicBtn = document.getElementById('scroll-to-music');
    const musicPlayer = document.querySelector('.custom-music-player');
    
    let isPlaying = false;
    let isDragging = false;
    let lastVolume = 1;
    
    // 设置循环播放
    audio.loop = true;
    
    // 检查是否是夜间模式并应用相应的样式
    function updatePlayerTheme() {
        if (document.documentElement.classList.contains('dark')) {
            musicPlayer.classList.add('dark-player');
            musicPlayer.style.backgroundColor = '#1f2937'; // 深色背景
            musicPlayer.querySelectorAll('.text-gray-800').forEach(el => {
                el.style.color = '#e5e7eb'; // 浅色文本
            });
            musicPlayer.querySelectorAll('.text-gray-500').forEach(el => {
                el.style.color = '#9ca3af'; // 中等色文本
            });
        } else {
            musicPlayer.classList.remove('dark-player');
            musicPlayer.style.backgroundColor = '';
            musicPlayer.querySelectorAll('.text-gray-800').forEach(el => {
                el.style.color = '';
            });
            musicPlayer.querySelectorAll('.text-gray-500').forEach(el => {
                el.style.color = '';
            });
        }
    }
    
    // 监听主题变化
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            // 延迟执行以确保主题已切换
            setTimeout(updatePlayerTheme, 10);
        });
    }
    
    // 初始应用主题
    updatePlayerTheme();
    
    // 格式化时间
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    // 更新进度条
    function updateProgress() {
        if (!isDragging) {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = `${progress}%`;
            progressHandle.style.left = `${progress}%`;
            currentTimeEl.textContent = formatTime(audio.currentTime);
        }
    }
    
    // 设置音频进度
    function setProgress(percent) {
        if (audio.duration) {
            progressBar.style.width = `${percent}%`;
            progressHandle.style.left = `${percent}%`;
            audio.currentTime = (percent / 100) * audio.duration;
            currentTimeEl.textContent = formatTime(audio.currentTime);
        }
    }
    
    // 实现进度条拖动功能
    progressHandle.addEventListener('mousedown', startDrag);
    progressHandle.addEventListener('touchstart', startDrag, { passive: false });
    
    function startDrag(e) {
        isDragging = true;
        progressHandle.style.cursor = 'grabbing';
        document.addEventListener('mousemove', drag);
        document.addEventListener('touchmove', drag, { passive: false });
        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('touchend', stopDrag);
        
        // 保存当前音量并静音
        lastVolume = audio.volume;
        audio.volume = 0;
        
        // 防止页面滚动
        if (e.type === 'touchstart') {
            e.preventDefault();
        }
    }
    
    function drag(e) {
        if (!isDragging) return;
        
        // 获取点击位置
        const rect = progressContainer.getBoundingClientRect();
        let x;
        if (e.type === 'touchmove') {
            x = e.touches[0].clientX - rect.left;
            e.preventDefault(); // 防止页面滚动
        } else {
            x = e.clientX - rect.left;
        }
        
        // 限制在进度条内
        let percent = (x / rect.width) * 100;
        percent = Math.max(0, Math.min(100, percent));
        
        // 设置进度条位置
        setProgress(percent);
    }
    
    function stopDrag() {
        if (isDragging) {
            isDragging = false;
            progressHandle.style.cursor = 'grab';
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('touchmove', drag);
            document.removeEventListener('mouseup', stopDrag);
            document.removeEventListener('touchend', stopDrag);
            
            // 恢复音量
            audio.volume = lastVolume;
        }
    }
    
    // 点击进度条任意位置
    progressContainer.addEventListener('click', (e) => {
        const rect = progressContainer.getBoundingClientRect();
        const percent = ((e.clientX - rect.left) / rect.width) * 100;
        setProgress(percent);
    });
    
    // 更新总时长
    audio.addEventListener('loadedmetadata', () => {
        durationEl.textContent = formatTime(audio.duration);
    });
    
    // 播放/暂停函数
    function togglePlay() {
        if (isPlaying) {
            audio.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            togglePlayBtn.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            audio.play().catch(error => {
                console.error('播放出错:', error);
                alert('音频播放失败，请尝试刷新页面');
            });
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            togglePlayBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }
        isPlaying = !isPlaying;
    }
    
    // 主播放器播放/暂停
    playPauseBtn.addEventListener('click', togglePlay);
    
    // 悬浮播放器播放/暂停
    togglePlayBtn.addEventListener('click', togglePlay);
    
    // 滚动到音乐说明卡片
    scrollToMusicBtn.addEventListener('click', () => {
        const musicSection = document.getElementById('music-section');
        if (musicSection) {
            musicSection.scrollIntoView({ behavior: 'smooth' });
            
            // 添加闪烁效果
            musicSection.classList.add('pulse-animation');
            setTimeout(() => {
                musicSection.classList.remove('pulse-animation');
            }, 1500);
        }
    });
    
    // 更新进度
    audio.addEventListener('timeupdate', updateProgress);
    
    // 播放结束（由于设置了循环播放，这个事件可能不会触发）
    audio.addEventListener('ended', () => {
        // 重置进度条
        progressBar.style.width = '0%';
        progressHandle.style.left = '0%';
        currentTimeEl.textContent = '00:00';
    });
    
    // 错误处理
    audio.addEventListener('error', (e) => {
        console.error('音频加载错误:', e);
        playPauseBtn.style.opacity = '0.5';
        playPauseBtn.disabled = true;
        togglePlayBtn.style.opacity = '0.5';
        togglePlayBtn.disabled = true;
    });
} 