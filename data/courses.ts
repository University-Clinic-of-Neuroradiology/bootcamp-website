export interface Notebook {
  name: string
  colabUrl: string
}

export interface Course {
  slug: string
  title: string
  subtitle: string
  description: string
  announcements?: string
  requirements: string[]
  notebooks: Notebook[]
  /** Path to theory HTML relative to site root, e.g. /theoretical_basics/basics.html */
  theoryLink?: string
  references?: string
  underConstruction?: boolean
}

const COLAB = 'https://colab.research.google.com/github/University-Clinic-of-Neuroradiology/python-bootcamp/blob/main'

export const courses: Course[] = [
  {
    slug: 'python-basics',
    title: 'Introductory',
    subtitle: 'Introductory course into the Python programming language.',
    description: `Introductory course into the Python programming language. The course is condensed to the minimum requirements for the use of Python in medical data analysis.

By the end of these notebooks, you should feel more comfortable with:
- Getting started with Jupyter notebooks and basic Python variables and functions
- Reading and writing basic Python code
- Reading and using error output from exceptions`,
    announcements:
      'This directory contains a few basic notebooks to get you going. It is recommended to start with these before tackling any of the others.',
    requirements: [
      'Make sure that Google Colab or your local installation (Jupyter notebooks, Anaconda) is working',
      'These notebooks are intended as an introduction to the syntax and functionality of Python',
      'Have a look at the theoretical basics before you start with the notebooks',
    ],
    notebooks: [
      {
        name: 'Basic concepts of Python and Jupyter Notebooks',
        colabUrl: `${COLAB}/notebooks/Introductory/01.01-Getting-Started-with-Python-and-Jupyter-Notebooks.ipynb`,
      },
      {
        name: 'Python Conditionals and Libraries',
        colabUrl: `${COLAB}/notebooks/Introductory/01.02-Python-Conditionals-and-Libraries.ipynb`,
      },
      {
        name: 'Python Error Handling',
        colabUrl: `${COLAB}/notebooks/Introductory/01.03-Python-Error-Handling.ipynb`,
      },
    ],
    theoryLink: '/theoretical_basics/basics.html',
  },
  {
    slug: 'dicom',
    title: 'DICOM',
    subtitle: 'Introduction to the DICOM file format.',
    description: `This track covers the DICOM file format, conversion to NIfTI and other additional file formats.

By the end of these notebooks, you should feel more comfortable with:
- The basics of DICOM data
- Handling DICOM metadata and modifying it
- NIfTI file format and how to convert between different file formats`,
    announcements:
      'The notebook "Basic concepts of DICOM" is particularly important for understanding the structure of medical image data. The other notebooks cover conversion to other file formats important for post-processing.',
    requirements: [
      'You should have completed the Introductory notebooks',
      'Have a look at the theoretical basics before you start with the notebooks',
    ],
    notebooks: [
      {
        name: 'Basic concepts of DICOM',
        colabUrl: `${COLAB}/notebooks/DICOM/01_introduction.ipynb`,
      },
      {
        name: 'Basic concepts of NIfTI and Data Conversion',
        colabUrl: `${COLAB}/notebooks/DICOM/02_dicom2nifti.ipynb`,
      },
      {
        name: 'Different File Formats and Data Conversion',
        colabUrl: `${COLAB}/notebooks/DICOM/03_optional.ipynb`,
      },
    ],
    theoryLink: '/theoretical_basics/dicom.html',
  },
  {
    slug: 'image-analysis',
    title: 'Image Analysis',
    subtitle: 'Introduction to Image Analysis.',
    description: `This track covers exploring, manipulating and measuring biomedical image data.

By the end of these notebooks, you should feel more comfortable with:
- Competence in exploring, manipulating, and analyzing biomedical image data using Python and relevant libraries
- Proficiency in image processing techniques including segmentation, filtering, and measurement in biomedical contexts
- Understanding of how to assess and compare biomedical images for disease evaluation and structural analysis`,
    announcements:
      'In this skill track, the notebooks build on each other. Therefore, complete them in the order given!',
    requirements: [
      'You should have understood the basic concepts of Python — otherwise revisit the Introductory notebooks',
      'Data from open-source databases is loaded automatically at the beginning of each notebook in Google Colab',
      'Have a look at the theoretical basics before you start with the notebooks',
    ],
    notebooks: [
      {
        name: 'Basic concepts of Exploration',
        colabUrl: `${COLAB}/notebooks/ImageAnalysis/01_exploration.ipynb`,
      },
      {
        name: 'Basic concepts of Image Comparison',
        colabUrl: `${COLAB}/notebooks/ImageAnalysis/02_image_comparison.ipynb`,
      },
      {
        name: 'Basic concepts of Masks and Filters',
        colabUrl: `${COLAB}/notebooks/ImageAnalysis/03_masks_and_filters.ipynb`,
      },
      {
        name: 'Basic concepts of Measurements',
        colabUrl: `${COLAB}/notebooks/ImageAnalysis/04_measurements.ipynb`,
      },
    ],
    theoryLink: '/theoretical_basics/image_analysis.html',
    references:
      'CT scan: The Cancer Imaging Archive · Hand radiograph: RSNA 2017 Pediatric Bone Age Challenge · MRI: Sunnybrook Cardiac Dataset · Head MRI: Lionheart et al. (2015), Zenodo · OASIS: Marcus et al., J. Cogn. Neurosci. (2007)',
  },
  {
    slug: 'data-management',
    title: 'Data Management',
    subtitle: 'Introduction to Data Management.',
    description: `This track covers working with databases and how to manage and analyze them.

By the end of these notebooks, you should feel more comfortable with:
- Confidence in dealing with Pandas
- A basic understanding of data processing and editing
- Processing medical datasets and extracting important information`,
    announcements:
      'In this skill track, the notebooks build on each other. Therefore, complete them in the order given!',
    requirements: [
      'Basic Python knowledge: variables, data types, functions, loops, conditionals',
      'You should have understood the basic concepts of Python — otherwise revisit the Introductory notebooks',
      'Data is loaded automatically at the beginning of each notebook in Google Colab',
      'Have a look at the theoretical basics before you start with the notebooks',
    ],
    notebooks: [
      {
        name: 'Basic concepts of data management',
        colabUrl: `${COLAB}/notebooks/DataManagement/01_introduction.ipynb`,
      },
      {
        name: 'Basic concepts of loading file formats',
        colabUrl: `${COLAB}/notebooks/DataManagement/02_load_files.ipynb`,
      },
      {
        name: 'Data Analysis — Lung Diseases',
        colabUrl: `${COLAB}/notebooks/DataManagement/03_lung_deseases_dataAnalysis.ipynb`,
      },
      {
        name: 'Data Analysis — Sleep',
        colabUrl: `${COLAB}/notebooks/DataManagement/04_sleep_data_analysis.ipynb`,
      },
    ],
    theoryLink: '/theoretical_basics/data_management.html',
    references: 'Chest X-Ray CXR8: Wang et al., CVPR 2017 · Sleep EEG: Kemp et al., IEEE Trans. Biomed. Eng. (2000)',
  },
  {
    slug: 'machine-learning',
    title: 'Machine Learning',
    subtitle: 'Introduction to Machine Learning.',
    description: `A series of notebooks designed to build your machine learning knowledge, focusing on fundamental algorithms and techniques using Python with scikit-learn, NumPy, and Matplotlib.

By the end of these notebooks, you should feel more comfortable with:
- Key machine learning concepts: linear models, decision trees, SVMs, ensemble methods, and unsupervised learning
- Implementing and optimizing ML models using scikit-learn, including preprocessing, training, hyperparameter tuning, and evaluation
- Applying machine learning to medical problems such as disease prediction, patient segmentation, and anomaly detection in health data`,
    announcements:
      'In this skill track, the notebooks build on each other. Therefore, complete them in the order given!',
    requirements: [
      'You should have completed all previous skill tracks',
      'Data from open-source databases is loaded automatically at the beginning of each notebook in Google Colab',
      'Have a look at the theoretical basics before you start with the notebooks',
    ],
    notebooks: [
      {
        name: 'Introduction to Machine Learning',
        colabUrl: `${COLAB}/notebooks/MachineLearning/01_ML_Introduction.ipynb`,
      },
      {
        name: 'End-to-End Machine Learning',
        colabUrl: `${COLAB}/notebooks/MachineLearning/02_End_to_End_ML.ipynb`,
      },
      {
        name: 'Classification',
        colabUrl: `${COLAB}/notebooks/MachineLearning/03_Classification.ipynb`,
      },
      {
        name: 'Training Models',
        colabUrl: `${COLAB}/notebooks/MachineLearning/04_Training_Models.ipynb`,
      },
      {
        name: 'Support Vector Machines (SVMs)',
        colabUrl: `${COLAB}/notebooks/MachineLearning/05_SVMs.ipynb`,
      },
      {
        name: 'Decision Trees',
        colabUrl: `${COLAB}/notebooks/MachineLearning/06_Decision_Trees.ipynb`,
      },
      {
        name: 'Ensemble Learning & Random Forests',
        colabUrl: `${COLAB}/notebooks/MachineLearning/07_Ensembles_RFs.ipynb`,
      },
      {
        name: 'Dimensionality Reduction',
        colabUrl: `${COLAB}/notebooks/MachineLearning/08_Dim_Reduction.ipynb`,
      },
      {
        name: 'Unsupervised Learning',
        colabUrl: `${COLAB}/notebooks/MachineLearning/09_Unsupervised_learning.ipynb`,
      },
    ],
    references:
      'MedMNIST v2: Jiancheng Yang et al. (2023), Scientific Data · Jiancheng Yang et al. (2021), IEEE ISBI',
  },
  {
    slug: 'deep-learning',
    title: 'Deep Learning',
    subtitle: 'Introduction to Deep Learning.',
    description: `A series of notebooks to expand your deep learning knowledge. Working with Keras and TensorFlow, you will learn about neural networks, deep learning model workflows, and how to optimize your models.

By the end of these notebooks, you should feel more comfortable with:
- The basics and terminology of Deep Learning
- Using Keras to train and test models`,
    announcements:
      'In this skill track, the notebooks build on each other. Therefore, complete them in the order given!',
    requirements: [
      'You should have completed all previous skill tracks',
      'Data is loaded automatically at the beginning of each notebook in Google Colab',
      'Have a look at the theoretical basics before you start with the notebooks',
    ],
    notebooks: [
      {
        name: 'Basic Concepts of Deep Learning',
        colabUrl: `${COLAB}/notebooks/DeepLearning/01_introduction_DL.ipynb`,
      },
      {
        name: 'Basic Concepts of Keras',
        colabUrl: `${COLAB}/notebooks/DeepLearning/02_introduction_keras.ipynb`,
      },
      {
        name: 'MedNIST Dataset',
        colabUrl: `${COLAB}/notebooks/DeepLearning/03_introduction_MNIST.ipynb`,
      },
      {
        name: 'Connecting Kaggle to Colab',
        colabUrl: `${COLAB}/notebooks/DeepLearning/03_introduction_MNIST.ipynb`,
      },
      {
        name: 'Artificial Neural Networks',
        colabUrl: `${COLAB}/notebooks/DeepLearning/03_introduction_MNIST.ipynb`,
      },
      {
        name: 'Covid-19 Diagnosis',
        colabUrl: `${COLAB}/notebooks/DeepLearning/03_introduction_MNIST.ipynb`,
      },
    ],
    theoryLink: '/theoretical_basics/deeplearning.html',
    references:
      'MedMNIST v2: Jiancheng Yang et al. (2023), Scientific Data · Jiancheng Yang et al. (2021), IEEE ISBI',
  },
  {
    slug: 'prompt-engineering',
    title: 'Prompt Engineering',
    subtitle: 'Introduction to Prompt Engineering.',
    description: `A set of curated notebooks to help you master prompt engineering for healthcare and beyond. Using real-world medical examples, you will learn how to communicate effectively with language models like ChatGPT, design safe and precise prompts, and apply them in clinical, educational, and research settings.

By the end of these notebooks, you should feel more comfortable with:
- The basics and terminology of prompt engineering
- Designing effective prompts to guide AI language models
- Applying prompt techniques in healthcare and scientific scenarios`,
    announcements:
      "For this skill track, it doesn't matter what kind of chatbot you prefer. We have tested everything with ChatGPT (OpenAI).",
    requirements: [
      'Basic knowledge of a chatbot of your choice',
      'Have a look at the theoretical basics before you start with the notebooks',
    ],
    notebooks: [
      {
        name: 'Beginner Prompt Engineering',
        colabUrl: `${COLAB}/notebooks/PrmptEng/eginner_Prompt_Engineering_Notebook.ipnyb`,
      },
      {
        name: 'Intermediate Prompt Engineering',
        colabUrl: `${COLAB}/notebooks/PrmptEng/Intermediate_Prompt_Engineering_NotebookV2.ipynb`,
      },
      {
        name: 'Advanced Prompt Engineering',
        colabUrl: `${COLAB}/notebooks/PrmptEng/Advanced_Prompt_Engineering_I_Notebook_V2.ipynb`,
      },
      {
        name: 'Expert Prompt Engineering',
        colabUrl: `${COLAB}/notebooks/PrmptEng/Expert_Prompt_Engineering_Notebook.ipynb`,
      },
      {
        name: 'Natural-Language Queries on Tabular Data',
        colabUrl: `${COLAB}/notebooks/PrmptEng/1.ipynb`,
      },
      {
        name: 'Dataset Ingestion and Cleaning (Chest X-ray)',
        colabUrl: `${COLAB}/notebooks/PrmptEng/2.ipynb`,
      },
      {
        name: 'Data Extraction from PDFs (Medical Reports)',
        colabUrl: `${COLAB}/notebooks/PrmptEng/3.ipynb`,
      },
      {
        name: 'Working with Research Papers',
        colabUrl: `${COLAB}/notebooks/PrmptEng/4.ipynb`,
      },
    ],
    theoryLink: '/theoretical_basics/prompt.html',
    references: 'Parts of this course were created with the help of ChatGPT.',
  },
  {
    slug: 'oop',
    title: 'Object Oriented Programming',
    subtitle: 'Introduction to OOP in Python.',
    description: `This track covers Object Oriented Programming (OOP) in Python:
- Understanding OOP concepts
- Classes and Objects
- Inheritance
- Practical examples`,
    announcements:
      "We are currently working on notebooks. Please check back later and stay tuned for what's coming next.",
    requirements: [
      'Basic Python knowledge: variables, data types, functions, loops, conditionals',
      'You should be able to work with a Python tool of your choice (Jupyter, Google Colab)',
    ],
    notebooks: [],
    underConstruction: true,
  },
  {
    slug: 'project',
    title: 'Final Project',
    subtitle: 'Apply your skills to real healthcare problems.',
    description: `To round off the bootcamp, we have prepared projects to test your acquired knowledge. Projects only cover topics from previous tracks.

There is no "one right" solution. We give you the freedom to find your own approach — the results just need to be correct. We have set aside about 2 hours for each project.`,
    announcements:
      'After you have completed a project, we have prepared sample solutions presenting one possible alternative. Remember: there are many valid solutions!',
    requirements: [
      'You should have completed all previous skill tracks',
      'Data is loaded automatically at the beginning of each notebook in Google Colab',
    ],
    notebooks: [
      {
        name: 'OASIS Analysis',
        colabUrl: `${COLAB}/projects/oasis_analysis.ipynb`,
      },
      {
        name: 'Hypothesis Testing in Healthcare: Drug Safety',
        colabUrl: `${COLAB}/projects/hypothesis_testing_drug_safety.ipynb`,
      },
      {
        name: 'SeHCAT Analysis',
        colabUrl: `${COLAB}/projects/sehcat_analysis.ipynb`,
      },
      {
        name: 'AI for Beginners',
        colabUrl: `${COLAB}/projects/AI_for_beginners.ipynb`,
      },
    ],
  },
]

export const MAIN_COURSE_SLUGS = [
  'python-basics',
  'dicom',
  'image-analysis',
  'data-management',
  'machine-learning',
  'deep-learning',
  'prompt-engineering',
]

export const OPTIONAL_COURSE_SLUGS = ['oop', 'project']
