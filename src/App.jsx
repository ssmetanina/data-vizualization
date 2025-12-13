import { useState, useEffect, useRef } from 'react'
import './index.css'

// модальное окно
function IntroModal({isModalActive, onStart}) {

  return (
    <>
      <div className={`intro-modal ${isModalActive==false ? 'hidden' : ''}`}>
        <h2>Вы готовы стать взрослыми?</h2>
        <button className={`ready-button`} onClick={()=> {
          onStart()
          }}>вперед</button>
      </div>
    </>
  )
}

function Section({children, className=""}) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3, 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`section ${className} ${isVisible ? "visible" : ""}`}>
    {children}
    </div>
  )
}

function ChartCard({title, src, ariaLabel, height}) {
  return (
    <div className="chart-card">
    <iframe
    title={title}
    src={src} 
    aria-label={ariaLabel}
    height={height}
    frameBorder="0"
    scrolling="no"
    style={{width: "100%", border: "none"}}
    data-external="1"
    >
    </iframe>
    </div>
  )
}


// контейнер секций
function Landing({isLandingActive}) {
  const graphs = [
    {
      n: 0,
      id: 'datawrapper-chart-s70vt',
      topic: 'flats',
      title: 'Съехать от родителей в Москве обойдется в 2.5 раза дороже, чем в Челябинске',
      ariaLabel: 'Bar Chart',
      src: "https://datawrapper.dwcdn.net/s70vt/1/",
      scrolling: "no",
      frameBorder: "0",
      style: "width: 0; min-width: 100% !important; border: none;" ,
      height: "576",
      dataExternal: "1",
  }, 
  {
      n: 1,
      id: 'datawrapper-chart-VP74L',
      topic: 'flats',
      title: 'Самый выгодный город для съёма квартиры — Уфа. На аренду здесь уходит всего 33% зарплаты',
      ariaLabel: 'Table',
      src: "https://datawrapper.dwcdn.net/VP74L/4/",
      scrolling: "no",
      frameborder: "0",
      style: "width: 0; min-width: 100% !important; border: none;" ,
      height: "646",
      dataExternal: "1",
  },
    {
        n: 2,
        id: 'datawrapper-chart-zvdE8',
        topic: 'work',
        title: 'Нефтяники и газовики имеют самый высокий заработок в РФ.',
        ariaLabel: 'Column Chart',
        src: 'https://datawrapper.dwcdn.net/zvdE8/2/',
        scrolling: 'no',
        frameBorder: '0',
        style: 'width: 0; min-width: 100% !important; border: none;',
        height: '591',
        dataExternal: '1',
    },
    {
        n: 3,
        id: 'datawrapper-chart-u0wFE',
        topic: 'work',
        title: 'Крупные города – « мелкие » зарплаты.',
        ariaLabel: 'Grouped column chart',
        src: 'https://datawrapper.dwcdn.net/u0wFE/3/',
        scrolling: 'no',
        frameBorder: '0',
        style: 'width: 0; min-width: 100% !important; border: none;',
        height: '769',
        dataExternal: '1',
    },
    {
        n: 4,
        id: 'datawrapper-chart-YRuFm',
        topic: 'products',
        title: 'Сколько стоит выжить: 7532 рубля в средняя цена на минимальный продуктовый набор в 2025 году.',
        ariaLabel: 'Line chart',
        src: 'https://datawrapper.dwcdn.net/YRuFm/2/',
        scrolling: 'no',
        frameBorder: '0',
        style: 'width: 0; min-width: 100% !important; border: none;',
        height: '480',
        dataExternal: '1',
    },
    {
        n: 5,
        id: 'datawrapper-chart-YaH0M',
        topic: 'work',
        title: 'Стремительный рост реальных зарплат за 6 лет.',
        ariaLabel: 'Arrow Plot',
        src: 'https://datawrapper.dwcdn.net/YaH0M/3/',
        scrolling: 'no',
        frameBorder: '0',
        style: 'width: 0; min-width: 100% !important; border: none;',
        height: '368',
        dataExternal: '1',
    }
]
  return (
    <div className={`landing ${isLandingActive ? 'active' : ''}`}>
      <Section className='section-body'>
        <h2 className='section-title'>
          Вы решились на взрослую жизнь?
        </h2>
        <p> 
      Поздравляем, вы приняты. Ваша карьера начинается. Первая «настоящая» зарплата — 
      это независимость, но и первый полный контакт с миром обязательств, где 8 (а то и больше) часов рабочего дня превращаются в основную статью расхода вашего времени. Сколько же на самом деле стоит этот купленный вами многочасовой отрезок дня в разных концах страны и в разных отраслях?
        </p>
        <ChartCard {...graphs[2]}/>
        <p>
          Мы взяли данные по средним зарплатам «на руки» в ключевых отраслях и десяти крупнейших городах. Цифры в вакансиях обещают разное. Но насколько эти различия реальны?
        </p>
        <ChartCard {...graphs[3]}/>
        <p>
      Нужно понимать, что цена часа, прописанная в контракте — не главное. Важнее, что остается от него после того, как вы «оплатите» базовую стоимость жизни. Одна и та же цифра в 80 тысяч рублей на руках будет означать комфорт в одних координатах и постоянный счетчик в других — всё упирается в цену вашего обычного понедельника. 
      <strong> Зато у вас теперь есть стабильная работа!</strong>
        </p>
      </Section>

      <Section className='section-body'>
      <h2 className='section-title'>
          Еще не передумали взрослеть? Давайте теперь об интересном.
        </h2>
        <p className='section-text'>
          Благодаря работе появляются деньги, закрываются мелкие хотелки и появляются хотелки побольше. 
          А какой следующий этап взрослой жизни? <br />
          Независимость продолжается переездом. Первая своя квартира — это свобода, но и первый удар по кошельку. 
          Сколько нужно накопить и ежемесячно зарабатывать, чтобы съехать?<br />
          Мы разобрали 10 крупнейших городов России: средняя аренда однокомнатной квартиры. 
          Где дешевле всего стартовать?
        </p>
        <ChartCard {...graphs[0]}/>
        <p className='section-text'>
          Но цена аренды — не главное. Важнее, какую дыру она прожжет в вашем ежемесячном бюджете.
          Одна и та же квартира за 30 тысяч рублей будет роскошью для одного и кабалой для другого — всё упирается в зарплату.<br />
          Поэтому мы посчитали долю от зарплаты, которую придётся отдавать за крышу над головой в разных городах. 
          За основу взяли медианную предлагаемую зарплату «на руки» — ту самую, которую пишут в вакансиях.<br />
          Результат показывает не просто стоимость жизни, а ее финансовую напряженность. 
          И здесь картина меняется.
        </p>
        <ChartCard {...graphs[1]}/>
        <p className='section-text'>
          Вывод прост: если ваша цель — съехать и размеренно жить, а не просто выживать от зарплаты до зарплаты, 
          смотрите на города внизу этого рейтинга. 
          Высокая зарплата в вакансии — еще не значит, 
          что после оплаты квартиры от неё что-то останется.
        </p>  

      </Section>

            <Section className='section-body'>
        <h2 className='section-title'>
          Идем дальше?
        </h2>
        <p className='section-text'>
          Вы замечали, что в родительском холодильнике еда появляется будто сама собой? Магия. Взрослость начинается ровно в тот момент, когда эта магия рассеивается у кассы супермаркета. Вы стоите с тележкой, а перед вами — не просто полки с товарами, а лес ценников. И каждый из них — это микро-вопрос, на который нужно ответить самому. Не «вкусно ли?», а «сколько твоей свободы это стоит?».
          Росстат называет это «стоимостью минимального набора продуктов питания». Сухая статистическая абстракция. Но на деле — это цена входного билета в самостоятельную жизнь. Не в кино, а в вашу собственную кухню. Это базовый чек, который мир выставляет вам просто за то, чтобы вы продолжали в нем участвовать. Без излишеств, без «хотелок», просто топливо для организма.

            Давайте посмотрим на эту цифру не как на экономический показатель, а как на градусник самостоятельности. Чем она выше в вашем городе, тем больше энергии, расчетливости и воли требуется, чтобы просто сохранить статус «функционирующего взрослого».

          <strong> Что скрывается за цифрой минимального набора в разных городах (условные данные)?</strong>

        </p>
        <ChartCard {...graphs[4]}/>
        <p className='section-text'>
          Что получаем? Цена взрослости в продуктовом отделе — это не только рубли. Это цена тотальной ответственности. За то, что попадает в вашу тележку. За сбалансированность рациона. За то, чтобы хватило до следующей зарплаты. Это момент, когда вы понимаете, что яблоки не «просто есть», а их нужно купить, вымыть и вовремя съесть, пока они не испортились.

          Минимальный набор — это дно. Тот уровень, ниже которого начинается не взрослость, а выживание. А вся настоящая, сложная, интересная взрослая жизнь начинается над этой чертой — в тех тратах, что идут сверх нее. На сыр под вино, на специи для нового рецепта, на ягоды не в сезон. Но чтобы добраться до этой надстройки, нужно сначала честно оплатить свой «входной билет». И его стоимость — самый честный и приземленный ответ на вопрос: «А что такое взрослая жизнь в [вставить свой город]?».

        </p>
        <ChartCard {...graphs[5]}/>
        <p>
          Вывод
        </p>  
      </Section>
    </div>
  )
}

function App() {
  const [isModalActive, setModalActive] = useState(true)
  const [isLandingActive, setLandingActive] = useState(false)
  const landingRef = useRef(null);

  const handleStart = () => {
    setModalActive(false);
    setLandingActive(true)
    // небольшая задержка, затем плавный скролл
    // setTimeout(() => landingRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
  };


  return (
    <>
    {
      isModalActive && (
        <IntroModal 
        isModalActive={isModalActive} 
        setModalActive={setModalActive} 
        onStart={handleStart}
        />
      )
    }
    {
    !isModalActive && (
    <div ref={landingRef}>
    <Landing isLandingActive={isLandingActive}/>
    </div>
      )
    }
     
    </>
  )
}

export default App