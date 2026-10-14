const CONFIG = {
    personalMessagesUrl: "https://vk.me/astamarketolog", 
    communityUrl: "https://vk.ru/pro_bot_auto",
    title: "Что сейчас поможет вашему бизнесу?",
    subtitle: "Ответьте на 3 вопроса — и получите практическую рекомендацию.",
    products: [ { id: "services", title: "Услуги" }, { id: "products", title: "Товары" }, { id: "education", title: "Обучение" } ],
    goals: [ { id: "sales", title: "Быстрее получать продажи" }, { id: "warming", title: "Прогревать аудиторию" }, { id: "reactivation", title: "Вернуть тех, кто уже интересовался" } ],
    resources: [ { id: "minimum", title: "Минимум" }, { id: "medium", title: "Есть немного времени" }, { id: "maximum", title: "Могу вложиться" } ],
    results: {
        services_sales_minimum: { title: "Не усложняйте. Сначала — короткий путь к покупке.", text: "Если ресурсов немного, не стройте большую воронку. Выберите одну конкретную услугу и сделайте простой сценарий: проблема клиента → короткая польза → предложение услуги. Ваша задача сейчас — убрать лишние шаги между интересом и обращением." },
        services_sales_medium: { title: "Соберите мини-воронку под одну услугу.", text: "Вы уже можете автоматизировать первый этап продаж. Сделайте небольшой тест, опрос или подбор решения, который заканчивается персональной рекомендацией и предложением обратиться к вам. Это позволит не объяснять одно и то же каждому человеку вручную." },
        services_sales_maximum: { title: "Автоматизируйте первичную консультацию.", text: "При наличии ресурсов можно построить полноценный путь клиента: знакомство → диагностика → персональная рекомендация → запись или заявка. Главное — автоматизировать не всё подряд, а тот участок, где вы регулярно отвечаете на одинаковые вопросы." },
        services_warming_minimum: { title: "Начните с одного полезного сценария.", text: "Вам не нужен сложный прогрев. Выберите один частый вопрос клиента и превратите его в небольшую интерактивную механику: человек отвечает на несколько вопросов и получает практическую рекомендацию. Так вы одновременно даёте пользу и показываете свою экспертизу." },
        services_warming_medium: { title: "Дайте аудитории повод взаимодействовать с вами.", text: "Сделайте интерактивный материал вместо очередного поста: тест, диагностику или подбор решения. После результата предложите следующий логичный шаг — консультацию, разбор или другой ваш продукт." },
        services_warming_maximum: { title: "Постройте цепочку от интереса до обращения.", text: "У вас уже достаточно ресурсов, чтобы соединить контент и автоматизацию. Можно сделать сценарий из нескольких касаний: диагностика → полезный результат → дополнительный материал → предложение услуги. Такой путь работает как продолжение контента, а не как отдельная рекламная конструкция." },
        services_reactivation_minimum: { title: "Вернитесь к тем, кто уже проявлял интерес.", text: "Не начинайте поиск клиентов с нуля. Возьмите людей, которые когда-то спрашивали о вашей услуге, но не купили. Подготовьте одно короткое сообщение с новой причиной вернуться к разговору: новый формат, полезный материал или актуальная проблема." },
        services_reactivation_medium: { title: "Сегментируйте тех, кто уже вас знает.", text: "Разделите старую аудиторию хотя бы на две группы: интересовались услугой и покупали раньше. Для каждой группы подготовьте отдельное предложение. Даже такая простая сегментация обычно полезнее массового одинакового сообщения всем." },
        services_reactivation_maximum: { title: "Создайте автоматический сценарий возврата.", text: "Можно настроить механику, которая собирает старую аудиторию, предлагает короткую диагностику и в зависимости от ответа показывает подходящий следующий шаг. Это превращает забытый контакт в потенциального клиента без постоянной ручной работы." },
        products_sales_minimum: { title: "Помогите человеку быстрее выбрать товар.", text: "Если ассортимент большой, покупателю может быть сложно принять решение. Начните с простого подбора: несколько вопросов → подходящий товар или категория. Даже без сложной автоматизации вы убираете один из главных барьеров перед покупкой." },
        products_sales_medium: { title: "Сделайте интерактивный подбор.", text: "Ваш следующий шаг — превратить каталог в помощника по выбору. Человек отвечает на несколько вопросов о своей задаче, а система показывает подходящие варианты. Это особенно полезно, если клиенту трудно самостоятельно разобраться в ассортименте." },
        products_sales_maximum: { title: "Превратите выбор товара в полноценный сценарий.", text: "Можно построить путь: задача клиента → подбор → рекомендации → дополнительные товары → переход к покупке. Такой сценарий помогает не просто показать ассортимент, а провести человека через выбор." },
        products_warming_minimum: { title: "Покажите товар через задачу клиента.", text: "Не начинайте прогрев с перечисления характеристик. Возьмите одну ситуацию, в которой человеку нужен ваш товар, и покажите решение этой задачи. Один конкретный сценарий обычно понятнее, чем длинное описание всех преимуществ." },
        products_warming_medium: { title: "Добавьте интерактив в знакомство с продуктом.", text: "Попробуйте механику «ответьте на несколько вопросов — получите подходящий вариант». Она одновременно вовлекает человека и помогает ему понять, какой товар ему действительно нужен." },
        products_warming_maximum: { title: "Свяжите контент, подбор и продажу.", text: "Можно создать полноценный интерактивный путь: человек определяет свою задачу → получает рекомендацию → знакомится с подходящим товаром → получает дополнительные предложения. Так контент становится частью продаж." },
        products_reactivation_minimum: { title: "Напомните о себе с конкретным поводом.", text: "Не отправляйте старым клиентам просто «давно не виделись». Дайте причину вернуться: новый товар, обновлённая коллекция, решение сезонной задачи или полезная подборка." },
        products_reactivation_medium: { title: "Сделайте повторный выбор проще.", text: "Посмотрите, что покупали ваши клиенты раньше, и предложите им следующий логичный вариант: дополнение, расходник, обновление или похожий товар. Персонализация здесь может быть очень простой." },
        products_reactivation_maximum: { title: "Постройте систему повторных продаж.", text: "Если база уже есть, можно автоматизировать повторные касания: сегментировать покупателей, учитывать предыдущие покупки и показывать подходящие предложения. Начните с одного товарного сценария, а затем расширяйте систему." },
        education_sales_minimum: { title: "Продавайте не курс, а следующий шаг.", text: "Если человеку сложно решиться на обучение, не пытайтесь сразу рассказать обо всём курсе. Дайте ему короткую диагностику или мини-разбор, который помогает увидеть собственную точку А. После этого предложение обучения становится логичным продолжением." },
        education_sales_medium: { title: "Сделайте диагностику входом в обучение.", text: "Создайте короткий тест, который помогает человеку определить свою ситуацию. В результате покажите, что ему стоит сделать дальше, и свяжите эту рекомендацию с вашим обучением. Так вы продаёте через полезность, а не через длинную презентацию." },
        education_sales_maximum: { title: "Постройте персональный маршрут до продукта.", text: "При достаточных ресурсах можно сделать интерактивную диагностику с разными результатами. Каждый результат должен объяснять проблему человека, давать один практический шаг и показывать, какой формат обучения подойдёт дальше." },
        education_warming_minimum: { title: "Дайте человеку маленький результат ещё до покупки.", text: "Выберите одну проблему из программы обучения и помогите человеку сделать первый шаг бесплатно. Хороший прогрев здесь — не количество контента, а ощущение: «Я уже получил пользу от этого эксперта»." },
        education_warming_medium: { title: "Превратите экспертность в интерактив.", text: "Вместо очередной серии постов попробуйте диагностику, тест или мини-кейс. Человек проходит механику, получает разбор своей ситуации и видит, что ещё можно изменить с вашей помощью." },
        education_warming_maximum: { title: "Создайте полноценный диагностический лид-магнит.", text: "Можно соединить несколько вопросов, персональные результаты, полезные материалы и следующий шаг. Главное — каждый результат должен быть самостоятельной мини-пользой, а не просто рекламой курса." },
        education_reactivation_minimum: { title: "Вернитесь к старой аудитории через пользу.", text: "Не начинайте с предложения купить курс. Напомните о себе через короткую диагностику, полезный материал или новый разбор проблемы, с которой ваша аудитория уже сталкивалась." },
        education_reactivation_medium: { title: "Разделите старую базу по интересам.", text: "Посмотрите, какие темы интересовали людей раньше. Затем предложите каждой группе свой следующий шаг: материал, диагностику, открытый урок или соответствующий продукт. Даже простая сегментация сделает повторное касание гораздо точнее." },
        education_reactivation_maximum: { title: "Соберите систему возвращения аудитории.", text: "Можно настроить несколько сценариев в зависимости от того, что человек изучал, на каком этапе остановился и какой продукт ему уже предлагали. Начните с одного сегмента и одного сценария, а не пытайтесь автоматизировать всю базу сразу." },
        default: { title: "Начните с одного понятного сценария.", text: "Не пытайтесь автоматизировать весь бизнес сразу. Найдите один повторяющийся путь клиента и сделайте его понятнее: что человек делает, что получает и какой следующий шаг ему предложить." }
    },
    resultButtonText: "Обсудить мой результат",
    subscribeButtonText: "Получать полезные материалы",
    restartButtonText: "Пройти заново"
};

let currentStep = 0;
let userAnswers = [];
const steps = ['products', 'goals', 'resources'];

function init() {
    document.getElementById('app-title').textContent = CONFIG.title;
    document.getElementById('app-subtitle').textContent = CONFIG.subtitle;
    document.getElementById('btn-chat').textContent = CONFIG.resultButtonText;
    document.getElementById('btn-chat').onclick = () => window.open(CONFIG.personalMessagesUrl, '_blank');
    document.getElementById('btn-subscribe').textContent = CONFIG.subscribeButtonText;
    document.getElementById('btn-subscribe').onclick = openModal;
    
    const checkbox = document.getElementById('policy-checkbox');
    const confirmBtn = document.getElementById('btn-confirm-subscribe');
    checkbox.addEventListener('change', function() { confirmBtn.disabled = !this.checked; });
    confirmBtn.onclick = () => { closeModal(); window.open(CONFIG.communityUrl, '_blank'); };
}

function startQuiz() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const stepKey = steps[currentStep];
    const options = CONFIG[stepKey];
    document.getElementById('question-text').textContent = options[0].title.includes('Услуги') || options[0].title.includes('Товары') || options[0].title.includes('Обучение') 
        ? (stepKey === 'products' ? '1. Что вы продаёте?' : stepKey === 'goals' ? '2. Что сейчас нужно?' : '3. Сколько ресурсов есть?') : 'Вопрос';
    const container = document.getElementById('answers-container');
    container.innerHTML = '';
    options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = option.title;
        btn.onclick = () => selectAnswer(option.id);
        container.appendChild(btn);
    });
    updateProgress();
}

function selectAnswer(id) {
    userAnswers.push(id);
    currentStep++;
    if (currentStep < steps.length) { showQuestion(); } else { showResult(); }
}

function showResult() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    const resultKey = userAnswers.join('_');
    const result = CONFIG.results[resultKey] || CONFIG.results.default;
    document.getElementById('result-title').textContent = result.title;
    document.getElementById('result-text').textContent = result.text;
    document.getElementById('progress').style.width = '100%';
}

function updateProgress() {
    const progress = ((currentStep) / steps.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

function restartQuiz() {
    currentStep = 0; userAnswers = [];
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
    document.getElementById('progress').style.width = '0%';
}

function openModal() {
    document.getElementById('policy-modal').style.display = 'flex';
    document.getElementById('policy-checkbox').checked = false;
    document.getElementById('btn-confirm-subscribe').disabled = true;
}

function closeModal() { document.getElementById('policy-modal').style.display = 'none'; }

init();
