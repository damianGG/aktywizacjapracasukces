import About6 from "@/components/blocks/about/About6Project";
import About6v2 from "@/components/blocks/about/About6v2";
import About6v3 from "@/components/blocks/about/About6v3";
import Image from "next/image";

export default function News() {
    return (
        <>
            <section
                className="wrapper"
                style={{
                    position: 'relative',
                    backgroundPosition: 'right',
                    backgroundImage: 'url(/_next/static/media/flaga-ue-tlo.a9057970.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div
                    className="overlay"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }}
                />
                <div
                    className="container pt-5 pb-5 pt-md-10 pb-md-10 text-center"
                    style={{ position: 'relative', zIndex: 1 }}
                >
                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
                            <h1 className="display-1 mb-3" style={{ color: 'white' }}>
                                O projekcie
                            </h1>
                            <p className="lead px-xxl-10"></p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mb-15 mt-15" >
                <p className="mb-3 fw-bold lead fs-lg">Wartość projektu: 1 921 336,09 zł </p>
                <p className="mb-3 fw-bold lead fs-lg mb-15 ">Wysokość wkładu Funduszy Europejskich: 1 344 935,26 zł</p>
                <div className=" mt-4 mb-15">
                    <p className="mb-3 fw-bold lead fs-lg">
                        Centrum Rozwoju Społeczno-Ekonomicznego realizuje projekt „Aktywizacja - Praca -
                        Sukces!”                        <br /><br />
                        Projekt współfinansowany z Europejskiego Funduszu Społecznego Plus (EFS+) w
                        ramach programu Fundusze Europejskie dla Dolnego Śląska 2021-2027, Priorytet nr
                        7 Fundusze Europejskie na rzecz rynku pracy i włączenia społecznego na Dolnym
                        Śląsku, Działanie nr 7.9 Aktywizacja osób na rynku pracy.                    </p>
                    <br />

                    <br />

                    <p className="mb-3 fw-bold lead fs-lg">
                        Głównym celem projektu jest poprawa sytuacji na rynku pracy 180 os. (108K,72M),
                        które zamieszkują w rozumieniu przepisów Kodeksu Cywilnego na obszarze woj.
                        dolnośląskiego oraz są zatrudnione na umowach krótkoterminowych, umowach
                        cywilno-prawnych lub wpisują się w definicję os. ubogich pracujących poprzez
                        działania realizowane w ramach aktywizacji zaw., w tym szkolenia, w okresie
                        realizacji proj. tj. od 1.01.2025 r. do 30.04.2026 r.
                        <br />
                        <br />
                    </p>
                    <p className="mb-3 fw-bold lead fs-lg">
                        W ramach wyżej wymienionej grupy docelowej: <br />
                    </p>
                    <ul>
                        <li>co najmniej 70% uczestników (co najmniej 126 osób) będzie
                            zamieszkiwało w rozumieniu Kodeksu Cywilnego miasta średnie tracące
                            funkcje społeczno-gospodarcze lub obszary zagrożone trwałą
                            marginalizacją w województwie dolnośląskim,
                        </li>
                        <li>minimum 40% całości grupy objętej wsparciem (minimum 72 osoby)
                            będzie posiadało niskie kwalifikacje (osoby z wykształceniem do poziomu
                            ISCED 3 włącznie),
                        </li>
                        <li>co najmniej 18 osób będą stanowiły osoby z niepełnosprawnościami (11
                            kobiet, 7 mężczyzn),
                        </li>
                        <li>minimum 60 osób będą stanowiły osoby między 18 a 29 r.ż. (36 kobiet, 24
                            mężczyzn) oraz 27 osób powyżej 55 r.ż. (16 kobiet, 11 mężczyzn),
                        </li>
                        <li>5 osób w wieku poniżej 18 roku życia (3 kobiety, 2 mężczyzn).
                        </li>
                    </ul>
                    <p>Główne rezultaty, które zostaną osiągnięte dzięki realizacji projektu:</p>
                    <ul>
                        <li>55 osób (33 kobiety, 22 mężczyzn) podejmie kształcenie lub szkolenie po
                            opuszczeniu programu,
                        </li>
                        <li>163 osób (98 kobiet, 65 mężczyzn) uzyska kwalifikacje po opuszczeniu
                            programu,
                        </li>
                        <li>Co najmniej 20% uczestników projektu (36 osób) w wyniku otrzymanego
                            wsparcia będzie zatrudnionych na podstawie umowy o pracę na czas
                            określony dłuższy niż 1 rok lub nieokreślony w wymiarze co najmniej ½
                            etatu.
                        </li>

                    </ul>
                    <p> Wartość projektu: 1 921 336,09 zł</p>
                    <p> Wysokość wkładu Funduszy Europejskich: 1 344 935,26 zł</p>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/photo-1.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>

                    <div className="col-lg-6">



                        <p className="lead fs-lg">Doradztwo zawodowe wraz z przygotowaniem Indywidualnych Planów
                            Działania</p>
                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        W ramach zadania nastąpi opracowanie IPD, aktualizacja oraz
                                        podsumowanie. Uczestnik/czka projektu otrzyma śr. 3 godz. zegarowe
                                        indywidualnego wsparcia w ramach IPD.                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Każdy/a z Uczestników/czek projektu otrzyma ofertę wsparcia, wynikającą z
                                        przeprowadzonej diagnozy potrzeb szkoleniowych i możliwości
                                        doskonalenia zawodowego, obejmującą formy pomocy, które przyczynią się
                                        do poprawy jego/jej sytuacji zawodowej. Uczestnikom/czkom projektu
                                        kompleksowe wsparcie. Każdy/a Uczestnik/czka otrzyma ofertę wsparcia
                                        obejmującą takie formy pomocy, które zostaną zidentyfikowane u niego/jej
                                        jako niezbędne w celu poprawy jego/jej sytuacji na rynku pracy. Wsparcie
                                        udzielone w projekcie będzie dostosowane o indywidualnych potrzeb
                                        Uczestników/czek projektu, wynikających z ich wiedzy, umiejętności i
                                        kompetencji oraz kwalifikacji do wykonywania danego zawodu.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparciem zostanie objętych 100% Uczestników/czek.
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/shutterstock_2429463807.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Pośrednictwo pracy w zakresie wyboru zawodu zgodnego z
                            kwalifikacjami i kompetencjami wspieranej osoby
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Uczestnik/czka projektu otrzyma śr. 3 godz. zegarowe indywidualnego
                                        wsparcia, które będzie wynikało z IPD. Z uwagi na fakt, iż grupę docelową
                                        stanowią osoby pracujące, ale posiadające niestabilne lub niskopłatne
                                        zatrudnienie, osobom tym należy umożliwić po uzyskaniu nowych
                                        kwalifikacji/kompetencji znalezienie nowego miejsca pracy – z lepszym
                                        wynagrodzeniem, czy z umową o pracę. Pośrednik pracy ściśle dostosuje
                                        wsparcie pod sytuację konkretnego/j Uczestnika/czki. Jego usługi będą
                                        miały na celu znalezienie lepszej pracy – na lepszych warunkach, aniżeli
                                        obecnie posiada UP. Głównym zadaniem pośrednictwa będzie najtrafniejszy
                                        dobór odpowiedniej oferty pracy dla Uczestnika/czki, jak także skojarzenie
                                        danego/j Uczestnika/czki z pracodawcą, któremu będzie on/ona odpowiadał.
                                        Pośrednictwo będzie pobudzało Uczestników/czki do samodzielnego
                                        działania i poszukiwania pracy oraz będzie monitorowało ich aktywność.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparciem zostanie objętych 100% Uczestników/czek.
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />
                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/shutterstock_2489860569.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Nabywanie, podwyższanie lub dostosowywanie kompetencji i kwalifikacji
                            poprzez wysokiej jakości szkolenia i kursy (w tym kwalifikacje rynkowe
                            włączone do Zintegrowanego Systemu Kwalifikacji)
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">

                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Projekt zakłada udział każdego/ej Uczestnika/czki w szkoleniu, śr. 90 godz.
                                        dydaktycznych szkolenia, które będzie wynikało z IPD. Program
                                        nauczania/szkoleń będzie wynikał z kształcenia w danym zawodzie, będzie
                                        spełniał wszelkie wymogi w tym zakresie. Tematyka szkoleń będzie ściśle
                                        związana z opracowanym IPD. Efektem szkoleń będzie uzyskanie
                                        kwalifikacji lub nabycie kompetencji. Uzyskanie kwalifikacji lub nabycie
                                        kompetencji będzie każdorazowo zweryfikowane poprzez przeprowadzenie
                                        odpowiedniego sprawdzenia przyswojonej wiedzy, umiejętności i
                                        kompetencji (np. w formie egzaminu). Ponadto będzie potwierdzone
                                        odpowiednim dokumentem (np. zaświadczenie, certyfikat).
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Uczestniczka projektu wraz z psychologiem skupią się na indywidualnej
                                        sytuacji społecznej i zawodowej. Poradnictwo psychologiczne przyczyni się do
                                        rozwiązania ich bieżących problemów i specyficznych trudności związanych z
                                        sytuacją życiową i podejmowaniem próby zmiany.

                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Uczestnikom/czkom zatrudnionym, wykonującym pracę zarobkową lub
                                        prowadzącym działalność gospodarczą, przysługuje stypendium w
                                        wysokości 20% zasiłku, o którym mowa w art. 72 ust. 1 pkt 1 Ustawy o
                                        promocji zatrudnienia i instytucjach rynku pracy, niezależnie od wymiaru
                                        godzin szkolenia, do dnia zakończenia szkolenia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W przypadku Uczestników/czek pracujących, którzy/które utracili/ły
                                        zatrudnienie w trakcie udziału w projekcie wysokość stypendium wynosi
                                        miesięcznie 120% zasiłku, o którym mowa w art. 72 ust.1 pkt 1 Ustawy o
                                        promocji zatrudnienia i instytucjach rynku pracy, jeżeli miesięczny wymiar
                                        godzin szkolenia wynosi co najmniej 150 godzin; w przypadku niższego
                                        miesięcznego wymiaru godzin szkolenia wysokość stypendium ustala się
                                        proporcjonalnie, z tym że stypendium nie może być niższe niż 20% zasiłku,
                                        o którym mowa w art. 72 ust. 1 pkt 1.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W ramach wsparcia Uczestnicy/czki mogą ubiegać się o zwrot kosztów
                                        dojazdu, jak również o zwrot kosztów opieki nad dzieckiem lub osobą
                                        zależną.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative ">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/intreview.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Nabywanie lub uzupełnianie doświadczenia zawodowego oraz
                            praktycznych umiejętności w  zakresie wykonywania danego zawodu
                            poprzez staże.
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Wsparciem zostanie objętych 18 Uczestników/czek projektu i będzie to
                                        wynikało z IPD (nie każdy/a Uczestnik/czka będzie wymagał/a tego typu
                                        działania); staż realizowany będzie na stanowisku związanym z tematyką
                                        odbytego przez Uczestnika/czkę szkolenia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Czas pracy Uczestnika/czki odbywającego/j staż będzie trwał 8 godzin na
                                        dobę (40 godzin tygodniowo), w przypadku osoby z niepełnosprawnością (w
                                        stopniu znacznym lub umiarkowanym) 7 godzin na dobę (35 godzin
                                        tygodniowo), każdorazowo przez okres 3 miesięcy.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Staże odbywać się będą w firmach zlokalizowanych możliwie najbliżej
                                        miejsc zamieszkania Uczestników/czek projektu, na stanowiskach w
                                        zakresie jakich Uczestnik/czka projektu zdobył/a kwalifikacje, zgodnie
                                        z ustalonym programem stażu.                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Uczestnikom/czkom projektu w ramach stażu zostaną zapewnione badania
                                        lekarskie, polisa ubezpieczeniowa NNW oraz stypendium stażowe, którego
                                        wysokość miesięcznie wyniesie 120% zasiłku dla bezrobotnych, zgodnie
                                        z obowiązującymi, w roku złożenia przez beneficjenta wniosku
                                        o dofinansowanie w odpowiedzi na ogłoszony konkurs stawkami w tym
                                        zakresie (psz.praca.gov.pl), jeżeli liczba godzin stażu w miesiącu
                                        kalendarzowym wyniesie nie mniej niż 160 godzin miesięcznie. W
                                        przypadku niższego miesięcznego wymiaru godzin, wysokość stypendium
                                        ustala się proporcjonalnie.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Każdy stażysta będzie zdobywał doświadczenie pod opieką Opiekuna
                                        stażysty.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W ramach wsparcia Uczestnicy/czki projektu mogą ubiegać się o zwrot
                                        kosztów dojazdu.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

