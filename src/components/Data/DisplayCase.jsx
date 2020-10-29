import React, { useEffect, useState } from 'react';
import { FormattedMessage } from "react-intl";
import studycases from './studycases';
import { useParams } from 'react-router-dom'; 

const StudyCase = () => {
  let { studyCaseIndex } = useParams();
  const [currentCase, setCurrentCase] = useState(null);

  useEffect(() => {
    studyCaseIndex = studyCaseIndex.replace("-study-case", "");
    setCurrentCase(studycases.find((studycase) => studycase.slug === studyCaseIndex));
  })

  return(
    <div>
      {currentCase && (
      <div>
        <h4>
          <FormattedMessage id={`${currentCase.slug}.title`} />
        </h4>
        <p>
          <FormattedMessage id={`${currentCase.slug}.paragraph`} />
        </p>
      </div>
    )}
    </div>
  )
}

export default StudyCase;