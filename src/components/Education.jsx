import React from 'react';

const educationData = [
  {
    id: 3,
    degree: 'Secondary School',
    institution : 'Bhawarilal Samra English High School',
    year: '2013 - 2019',
    result: 'Passed SSC Exam with 93.20%',
  },
  {
    id: 4,
    degree: 'Diploma in Engineering',
    institution : 'Government Polytechnic, Amravati',
    year: '2019 - 2022',
    result: 'Aggregate: 94.79%',
  },
  {
    id: 5,
    degree: 'Bachelor of Technology',
    institution : 'Vishwakarma Institute of Technology',
    year: 'Btech in CS: 2022 - 2025',
    result: 'CGPA: 8.13',
  },
  // Add more education entries as needed...
];

function Education() {
  return (
    <section className="py-10" id='education'>
      <div className="container mx-auto">
      <h2 className="text-2xl md:text-4xl font-extrabold text-center text-blue-500 mb-6">Education</h2>
      
        <div className="mx-auto max-w-lg px-12 lg:px-32 ">
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {educationData.map((education) => (
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {education.degree}
                </h3>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-400">
                  {education.year}
                </h4>
                
                <p className="text-base font-bold text-blue-500 ">
                  {education.institution}
                </p>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  {education.result}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Education;
