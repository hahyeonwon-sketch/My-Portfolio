document.addEventListener('DOMContentLoaded', function () {
    renderSkills();
    setupSmoothScroll();
});

// 1. 이미지 및 요청사항을 바탕으로 완성된 기술 스택 데이터
const skills = [
    {
        category : "Language",
        items : ["Java 21", "HTML5 / CSS3", "JavaScript"]
    },
    {
        category : "Framework & Library",
        items : ["Spring Boot", "Thymeleaf", "Spring Data JPA", "Spring Security", "Lombok"]
    },
    {
        category : "DB & Tool",
        items : ["MySQL", "DBeaver", "IntelliJ IDEA", "GitHub"]
    },
    {
        category : "Design & Modeling",
        items : ["Figma", "ERDCloud (메머드)"]
    }
];

// 2. DOM 동적 생성 함수
function renderSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if(!skillsGrid) return;

    skillsGrid.innerHTML = '';

    skills.forEach( skill => {
        const article = document.createElement('article');
        article.className = 'skill-card';

        const h3 = document.createElement('h3');
        h3.textContent = skill.category;
        article.appendChild(h3);

        const ul = document.createElement('ul');
        skill.items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item; 
            ul.appendChild(li);
        });
        article.appendChild(ul);
        skillsGrid.appendChild(article);
    });
}

// 3. 부드러운 스크롤 (부드러운 사용자 경험 제공)
function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e){
            const targetId = this.getAttribute('href');
            
            // 해시태그로 시작하는 경우에만 작동
            if(targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if(targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80, // 헤더 높이만큼 보정
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}