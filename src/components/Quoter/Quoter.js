import React, { useState } from 'react'
import DarkButton from '../Shared/DarkButton';

function Quoter(props) {

    const language = props.language;

    const fixedCosts = {
        Internet: 41000,
        Light: 80000,
        Hosting: 11067,
        Template: 269520,
        Divi: 399788,
        Elementor: 444708
    }

    const hostgator = [
        [[25471],[11050],[9200] , [7350]], //Persons
        [[42524],[17200],[15350],[12300]], //Teams
        [[68355],[29650],[28300],[22750]]  //Companies
    ]

    const hostinguer = [
        [[23499],[7347] ,[5487], [3627]],  //Persons
        [[27499],[11067],[10137],[8277]],  //Teams
        [[43399],[15717],[12927],[11997]]  //Companies
    ]

    const wordpress = {
        web_social: [
            [[3662400],[1831200],[915600]],
            [[3836800],[1918400],[959200]],
            [[4011200],[2005600],[1002800]],
            [[4185600],[2092800],[1046400]],
            [[4534400],[2267200],[1133600]]
        ],
        only_web:[
            [[1831200],[915600] ,[457800]],
            [[1918400],[959200] ,[479600]],
            [[2005600],[1002800],[501400]],
            [[2092800],[1046400],[523200]],
            [[2267200],[1133600],[566800]]
        ]
    }

    const code = {
        web_social: [
            [[3998400],[2998800],[1999200]],
            [[4188800],[3141600],[2094400]],
            [[4379200],[3284400],[2189600]],
            [[4569600],[3427200],[2284800]],
            [[4950400],[3712800],[2475200]]
        ],
        only_web:[
            [[2167200],[1625400],[1083600]],
            [[2270400],[1702800],[1135200]],
            [[2373600],[1780200],[1186800]],
            [[2476800],[1857600],[1238400]],
            [[2683200],[2012400],[1341600]]
        ]
    }

    const social = [
        [[915600] ,[457800],[228900]],
        [[959200] ,[479600],[239800]],
        [[1002800],[501400],[250700]],
        [[1046400],[523200],[261600]]
    ]

    
    const [surveyAnswers, setSurveyAnswers] = useState([]);
    const [firstQuestionAnswered, setFirstQuestionAnswered] = useState(false);
    const [secondQuestionAnswered, setSecondQuestionAnswered] = useState(false);
    const [thirdQuestionAnswered, setThirdQuestionAnswered] = useState(false);
    const [fourthQuestionAnswered, setFourthQuestionAnswered] = useState(false);
    const [fifthQuestionAnswered, setFifthQuestionAnswered] = useState(false);
    const [sixthQuestionAnswered, setSixthQuestionAnswered] = useState(false);
    const [seventhQuestionAnswered, setSeventhQuestionAnswered] = useState(false);
    const [eigthQuestionAnswered, setEigthQuestionAnswered] = useState(false);
    const [lastQuestionAnswered, setLastQuestionAnswered] = useState(false);
    const [finalCost, setFinalCost] = useState("");
    const [monthSalary, setMonthSalary] = useState("");
    const [months, setMonths] = useState(0);

    function setProduct(product){
        setSurveyAnswers([...surveyAnswers, product]);
        setFirstQuestionAnswered(true);
    }

    function setMethod(method){
        setSurveyAnswers([...surveyAnswers, method]);
        setSecondQuestionAnswered(true);
    }

    function setTimeSecond(time){
        setSurveyAnswers([...surveyAnswers, time]);
        setSecondQuestionAnswered(true);
    }

    function setTime(time){
        setSurveyAnswers([...surveyAnswers, time]);
        setThirdQuestionAnswered(true);
    }

    function setWordpressMethod(wordpressMethod){
        setSurveyAnswers([...surveyAnswers, wordpressMethod]);
        setFourthQuestionAnswered(true);
    }

    function setDifficulty(difficulty){
        setSurveyAnswers([...surveyAnswers, difficulty]);
        setFifthQuestionAnswered(true);
    }

    function setHasLogo(hasLogo){
        setSurveyAnswers([...surveyAnswers, hasLogo]);
        setSixthQuestionAnswered(true);
    }

    function setWantMoreSocialMedia(wantMoreSocialMedia){
        setSurveyAnswers([...surveyAnswers, wantMoreSocialMedia]);
        setSeventhQuestionAnswered(true);
    }

    function setNeedPhotographer(needPhotographer){
        surveyAnswers.push(needPhotographer);
        setEigthQuestionAnswered(true);
        if(surveyAnswers[0] === 2){
            calculateCost();
        }
    }

    function setCustomerType(customerType){
        surveyAnswers.push(customerType);
        setLastQuestionAnswered(true);
        calculateCost();
    }

    function calculateCost(){
        if(surveyAnswers.length === 9){
            const tiempo = surveyAnswers[2];
            const complexity = surveyAnswers[4];

            let salary = parseInt(wordpress.web_social[complexity][tiempo]) + parseInt(hostinguer[surveyAnswers[8]][1]);

            if(tiempo === 0){
                salary += (parseInt(fixedCosts.Internet)/2);
                salary += (parseInt(fixedCosts.Light)/2);
                salary += (parseInt(fixedCosts.Hosting)/2);
            }
            else if(tiempo === 1){
                salary += (parseInt(fixedCosts.Internet));
                salary += (parseInt(fixedCosts.Light));
                salary += (parseInt(fixedCosts.Hosting));
            }
            else{
                salary += (parseInt(fixedCosts.Internet)*2);
                salary += (parseInt(fixedCosts.Light)*2);
                salary += (parseInt(fixedCosts.Hosting)*2);
                setMonths(2);
            }


            if(surveyAnswers[3] === 1){
                salary += parseInt(fixedCosts.Template);
            }
            else if(surveyAnswers[3] === 2){
                salary += parseInt(fixedCosts.Divi);
            }
            
            

            if(surveyAnswers[7] === 0){
                salary += (salary * 0.2);
            }
            else if(surveyAnswers[6] === 0){
                salary += (salary * 0.15);
            }
            else if(surveyAnswers[5] === 1){
                salary += (salary * 0.1);
            }

            if(months !== 0){
                setMonthSalary((salary/months).toString());
            }
            
            setFinalCost(salary.toString());
        }
        if(surveyAnswers.length === 8){
            const tiempo = surveyAnswers[2];
            const complexity = surveyAnswers[3];

            let salary = parseInt(code.web_social[complexity][tiempo]) + parseInt(hostinguer[surveyAnswers[7]][1]);

            if(tiempo === 0){
                salary += (parseInt(fixedCosts.Internet));
                salary += (parseInt(fixedCosts.Light));
                salary += (parseInt(fixedCosts.Hosting));
            }
            else if(tiempo === 1){
                salary += (parseInt(fixedCosts.Internet)*2);
                salary += (parseInt(fixedCosts.Light)*2);
                salary += (parseInt(fixedCosts.Hosting)*2);
                setMonths(2);
            }
            else{
                salary += (parseInt(fixedCosts.Internet)*4);
                salary += (parseInt(fixedCosts.Light)*4);
                salary += (parseInt(fixedCosts.Hosting)*4);
                setMonths(4);
            }


            if(surveyAnswers[6] === 0){
                salary += (salary * 0.2);
            }
            else if(surveyAnswers[5] === 0){
                salary += (salary * 0.15);
            }
            else if(surveyAnswers[4] === 1){
                salary += (salary * 0.1);
            }

            if(months !== 0){
                setMonthSalary((salary/months).toString());
            }

            setFinalCost(salary.toString());
        }

        if(surveyAnswers.length === 6){
            const tiempo = surveyAnswers[2];
            const complexity = surveyAnswers[4];

            let salary = parseInt(wordpress.web_social[complexity][tiempo]) + parseInt(hostinguer[surveyAnswers[5]][1]);


            if(tiempo === 0){
                salary += (parseInt(fixedCosts.Internet)/2);
                salary += (parseInt(fixedCosts.Light)/2);
                salary += (parseInt(fixedCosts.Hosting)/2);
            }
            else if(tiempo === 1){
                salary += (parseInt(fixedCosts.Internet));
                salary += (parseInt(fixedCosts.Light));
                salary += (parseInt(fixedCosts.Hosting));
            }
            else{
                salary += (parseInt(fixedCosts.Internet)*2);
                salary += (parseInt(fixedCosts.Light)*2);
                salary += (parseInt(fixedCosts.Hosting)*2);
                setMonths(2);
            }


            if(surveyAnswers[3] === 1){
                salary += parseInt(fixedCosts.Template);
            }
            else if(surveyAnswers[3] === 2){
                salary += parseInt(fixedCosts.Divi);
            }

            if(months !== 0){
                setMonthSalary((salary/months).toString());
            }

            setFinalCost(salary.toString());
        }

        if(surveyAnswers.length === 5){
            if(surveyAnswers[0] === 1 && surveyAnswers[1] === 1){
                const tiempo = surveyAnswers[2];
                const complexity = surveyAnswers[3];

                let salary = parseInt(code.web_social[complexity][tiempo]) + parseInt(hostinguer[surveyAnswers[4]][1]);

                if(tiempo === 0){
                    salary += (parseInt(fixedCosts.Internet));
                    salary += (parseInt(fixedCosts.Light));
                    salary += (parseInt(fixedCosts.Hosting));
                }
                else if(tiempo === 1){
                    salary += (parseInt(fixedCosts.Internet)*2);
                    salary += (parseInt(fixedCosts.Light)*2);
                    salary += (parseInt(fixedCosts.Hosting)*2);
                    setMonths(2);
                }
                else{
                    salary += (parseInt(fixedCosts.Internet)*4);
                    salary += (parseInt(fixedCosts.Light)*4);
                    salary += (parseInt(fixedCosts.Hosting)*4);
                    setMonths(4);
                }

                if(months !== 0){
                    setMonthSalary((salary/months).toString());
                }

                setFinalCost(salary.toString());

            }
            else if(surveyAnswers[0] === 2){
                const tiempo = surveyAnswers[1];
                let complexity = 1; 
                
                if(surveyAnswers[4] === 0){
                    complexity = 3;
                }
                else if(surveyAnswers[3] === 0){
                    complexity = 2;
                }
                else if(surveyAnswers[2] === 1){
                    complexity = 1;
                }
                
                let salary = parseInt(social[complexity][tiempo]);

                if(months !== 0){
                    setMonthSalary((salary/months).toString());
                }
                setFinalCost(salary.toString());
            }
        }

        console.log(months);
        console.log(finalCost);
        console.log(finalCost/months);
    }

    return (
        <div style={{width: "100%",height: '100vh', display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
            {!firstQuestionAnswered && <div className="survey-question__container">
                <p>¿Cual de estas opciones es la que necesitas?</p>
                <div className="survey-question__buttons">
                    <DarkButton text="Página web y redes sociales" setAnswer={() => setProduct(0)}/>
                    <DarkButton text="Solo página web" setAnswer={() => setProduct(1)}/>
                    <DarkButton text="Solo redes sociales" setAnswer={() => setProduct(2)}/>
                </div>
            </div>}
            {(firstQuestionAnswered && !secondQuestionAnswered && (surveyAnswers[0] === 0 || surveyAnswers[0] === 1)) && <div className="survey-question__container">
                <p>¿Cual de estos metodos prefieres?</p>
                <div className="survey-question__buttons">
                    <DarkButton text="Wordpress" setAnswer={() => setMethod(0)}/>
                    <DarkButton text="Desarrollo web" setAnswer={() => setMethod(1)}/>
                </div>
            </div>}
            {(firstQuestionAnswered && surveyAnswers[0] === 2 && !secondQuestionAnswered) && <div className="survey-question__container">
                <p>¿Cuanto tiempo tienes?</p>
                <div className="survey-question__buttons">
                    <DarkButton text="1 Semana" setAnswer={() => setTimeSecond(0)}/>
                    <DarkButton text="2 Semanas" setAnswer={() => setTimeSecond(1)}/>
                    <DarkButton text="1 Mes" setAnswer={() => setTimeSecond(2)}/>
                </div>
            </div>}
            {(secondQuestionAnswered && !thirdQuestionAnswered && surveyAnswers[1] === 0 && surveyAnswers[0] !== 2) && <div className="survey-question__container">
                <p>¿Cuanto tiempo tienes?</p>
                <div className="survey-question__buttons">
                    <DarkButton text="2 Semanas" setAnswer={() => setTime(0)}/>
                    <DarkButton text="1 Mes" setAnswer={() => setTime(1)}/>
                    <DarkButton text="2 Meses" setAnswer={() => setTime(2)}/>
                </div>
            </div>}
            {(secondQuestionAnswered && !thirdQuestionAnswered && surveyAnswers[1] === 1 && surveyAnswers[0] !== 2) && <div className="survey-question__container">
                <p>¿Cuanto tiempo tienes?</p>
                <div className="survey-question__buttons">
                    <DarkButton text="1 Mes" setAnswer={() => setTime(0)}/>
                    <DarkButton text="2 Meses" setAnswer={() => setTime(1)}/>
                    <DarkButton text="4 Meses" setAnswer={() => setTime(2)}/>
                </div>
            </div>}
            {(thirdQuestionAnswered && !fourthQuestionAnswered && surveyAnswers[1] === 0) && <div className="survey-question__container">
                <p>¿Que tan personalizada quieres tu página?</p>
                <div className="survey-question__buttons">
                    <DarkButton text="Una plantilla gratuita está bien" setAnswer={() => setWordpressMethod(0)}/>
                    <DarkButton text="Quisiera comprar una plantilla de mi agrado" setAnswer={() => setWordpressMethod(1)}/>
                    <DarkButton text="Quiero una página completamente personalizada!" setAnswer={() => setWordpressMethod(2)}/>
                </div>
            </div>}
            {((fourthQuestionAnswered && !fifthQuestionAnswered) || (thirdQuestionAnswered && surveyAnswers[1] === 1 && !fifthQuestionAnswered)) && <div className="survey-question__container">
                <p>¿Que tipo de página quieres?</p>
                <div className="survey-question__buttons">
                    <DarkButton text="Una landing page" setAnswer={() => setDifficulty(0)}/>
                    <DarkButton text="Una aplicación web" setAnswer={() => setDifficulty(1)}/>
                    <DarkButton text="Un sistema de información" setAnswer={() => setDifficulty(2)}/>
                </div>
            </div>}
            {(((fifthQuestionAnswered && surveyAnswers[0] !== 1) || surveyAnswers[0] === 2) && secondQuestionAnswered && !sixthQuestionAnswered) && <div className="survey-question__container">
                <p>¿Ya tienes un logo e íconos de tu marca?</p>
                <div className="survey-question__buttons">
                    <DarkButton text="Los tengo!" setAnswer={() => setHasLogo(0)}/>
                    <DarkButton text="No los tengo" setAnswer={() => setHasLogo(1)}/>
                </div>
            </div>}
            {(sixthQuestionAnswered && !seventhQuestionAnswered && surveyAnswers[0] !== 1) && <div className="survey-question__container">
                <p>¿Quieres abrir una red social diferente a Facebook, instagram y linkedIn?</p>
                <div className="survey-question__buttons">
                    <DarkButton text="Si quiero!" setAnswer={() => setWantMoreSocialMedia(0)}/>
                    <DarkButton text="No quiero" setAnswer={() => setWantMoreSocialMedia(1)}/>
                </div>
            </div>}
            {(seventhQuestionAnswered && surveyAnswers[0] !== 1 && !eigthQuestionAnswered) && <div className="survey-question__container">
                <p>¿Necesitas un servicio de fotografía para tus publicaciones?</p>
                <div className="survey-question__buttons">
                    <DarkButton text="Si lo necesito!" setAnswer={() => setNeedPhotographer(0)}/>
                    <DarkButton text="No lo necesito" setAnswer={() => setNeedPhotographer(1)}/>
                </div>
            </div>}
            {((eigthQuestionAnswered && surveyAnswers[0] !== 2 && !lastQuestionAnswered) || (fifthQuestionAnswered && surveyAnswers[0] === 1 && !lastQuestionAnswered)) && <div className="survey-question__container">
                <p>¿Que tipo de cliente eres?</p>
                <div className="survey-question__buttons">
                    <DarkButton text="Soy una sola persona" setAnswer={() => setCustomerType(0)}/>
                    <DarkButton text="Tengo un equipo" setAnswer={() => setCustomerType(1)}/>
                    <DarkButton text="Soy una empresa" setAnswer={() => setCustomerType(2)}/>
                </div>
            </div>}
            {(lastQuestionAnswered || (eigthQuestionAnswered && surveyAnswers[0] === 2)) && 
            <div className="survey-question__container"> 
                <strong>Este servicio cuesta aproximadamente:</strong><br/><br/>
                {(months !== 0) && <div>
                    <strong style={{width: "100%", padding: "10px 20px", border: "solid 1px #000", borderRadius: "30px"}}>$ {(finalCost/months).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} COP/Mes</strong>
                    <p style={{marginTop: "20px", fontSize: "0.8rem"}}>Para un total de $ {(finalCost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} COP</p><br/>
                </div>}
                {(months === 0) && <div>
                    <strong style={{width: "100%", padding: "10px 20px", border: "solid 1px #000", borderRadius: "30px"}}>$ {(finalCost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} COP</strong>
                </div>}
                <p style={{marginTop: "20px", fontSize: "0.8rem"}}>Ten en cuenta que este costo puede variar ya que los precios de los diferentes recursos cambian constantemente</p>
            </div>}
        </div>
    )
}

export default Quoter