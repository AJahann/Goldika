import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';

import './Stepper.css';
import Icon1 from './Icon1';
import Icon2 from './Icon2';
import Icon3 from './Icon3';
import Icon4 from './Icon4';

const steps = [
  {
    label: 'ثبت‌نام و احراز هویت',
    description: `ثبت نام و احراز هویت در گلدیکا ساده بوده و در چند ثانیه اتفاق می‌افتد. نیازی نیست به جایی مراجعه کنید یا از خودتان عکس، فیلم یا مدرکی بارگذاری کنید.`,
  },
  {
    label: 'شارژ کیف پول',
    description:
      'با ثبت‌نام در گلدیکا برای شما یک کیف‌پول ریالی و یک کیف طلا ایجاد می‌شود. برای خرید طلا کافی است کیف پول خود را به میزان دلخواه شارژ کنید.',
  },
  {
    label: 'خرید فروش طلا',
    description: `بلافاصله پس از شارژ کیف پول می‌توانید طلا بخرید و یا اگر در کیف طلای خود طلا دارید، می‌توانید هر مقدار از آن را که می‌خواهید بفروشید.`,
  },
  {
    label: 'تسویه ریالی یا تحویل طلای فیزیکی',
    description: `با درخواست تسویه‌ی ریالی، هر میزان از موجودی کیف پول که می‌خواهید نهایتاً طی یک روز کاری به حساب بانکی شما واریز می‌شود. همچنین می‌توانید موجودی کیف طلایی خود را به صورت فیزیکی تحویل بگیرید.`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (step) => (e) => {
    setActiveStep(step);
    console.log(step);
  };

  return (
    <div className='stepper container'>
      <div className='stepper-parent'>
        <h2>مراحل خرید و فروش طلای آب شده</h2>
        <div className='stepper-wrap'>
          <div className='stepper-labels'>
            <Box>
              <Stepper
                id='my-stepper'
                nonLinear
                activeStep={activeStep}
                orientation='vertical'
              >
                {steps.map((step, index) => (
                  <Step key={step.label}>
                    <StepButton
                      className='stepperBtn'
                      onClick={handleStep(index)}
                    >
                      {step.label}
                    </StepButton>
                    {activeStep === index && (
                      <div
                        style={{
                          marginTop: -44,
                          marginRight: -11,
                          paddingTop: 44,
                          display: 'none',
                        }}
                        className='stepper-desc-box sm'
                      >
                        <p>{steps[activeStep].description}</p>
                        <div className='stepper-desc-box-icon'>
                          {
                            {
                              0: <Icon1 />,
                              1: <Icon2 />,
                              2: <Icon3 />,
                              3: <Icon4 />,
                            }[activeStep]
                          }
                        </div>
                      </div>
                    )}
                  </Step>
                ))}
              </Stepper>
            </Box>
          </div>
          <div className='stepper-description sd'>
            <div className='stepper-desc-box'>
              <p>{steps[activeStep].description}</p>
              <div className='stepper-desc-box-icon'>
                {
                  {
                    0: <Icon1 />,
                    1: <Icon2 />,
                    2: <Icon3 />,
                    3: <Icon4 />,
                  }[activeStep]
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
