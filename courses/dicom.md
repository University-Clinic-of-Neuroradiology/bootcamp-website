---
layout: page
title: DICOM
subtitle: Introduction to the DICOM file format.
---

## 📋 Content
- [📋 Content](#-content)
- [📄 Description](#-description)
- [📣 Current announcements](#-current-announcements)
- [❗ Course requirements](#-course-requirements)
- [📒 Syllabus](#-syllabus)
- [📝 Theoretical basics](#-theoretical-basics)
  - [What is DICOM?](#what-is-dicom)
  - [Key Concepts](#key-concepts)
  - [DICOM Header](#dicom-header)
  - [DICOM Tags](#dicom-tags)
  - [Transfer Syntax](#transfer-syntax)
  - [Common DICOM Elements](#common-dicom-elements)


## 📄 Description
This directory contains a few basic notebooks to learn more about the DICOM file format, the conversion to Nifti and other additional file formats.

By the end of these notebooks, you should feel more comfortable with:
- the basics of DICOM data
- to handle DICOM metadata and to modify these
- Nifti file format and how to convert different file formats


## 📣 Current announcements
The notebook "Basic concepts of DICOM" is particularly important for understanding the structure of medical image data. The other two notebooks show the conversion into other file formats that are important for post-processing.


## ❗ Course requirements
- you should have completed the [Introductory](./python_basics.md) notebooks
- have a look at the theoretical basics before you start with the notebooks


## 📒 Syllabus
- Basic concepts of DICOM <a href="https://colab.research.google.com/github/University-Clinic-of-Neuroradiology/python-bootcamp/blob/main/notebooks/DICOM/01_introduction.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>
- Basic concepts of Nifti and Data Conversion <a href="https://colab.research.google.com/github/University-Clinic-of-Neuroradiology/python-bootcamp/blob/main/notebooks/DICOM/02_dicom2nifti.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>
- Different File Formats and Data Conversion <a href="https://colab.research.google.com/github/University-Clinic-of-Neuroradiology/python-bootcamp/blob/main/notebooks/DICOM/03_optional.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>


## 📝 Theoretical basics
For some information on the topic, take a look at the [![Slides](https://img.shields.io/badge/Go%20to-slides-pink.svg)](https://raw.githack.com/University-Clinic-of-Neuroradiology/python-bootcamp/main/notebooks/DICOM/slides/DICOM.slides.html#/).

From imaging scanners, like MRI or CT, images are initially collected in the DICOM format and can be converted to these other formats to make working with the data easier.

| Format Name | File Extension | Origin                                         |
|-------------|----------------|------------------------------------------------|
| DICOM       | .dcm           | ACR/NEMA Consortium                            |
| Analyze     | .img/.hdr      | Analyze Software, Mayo Clinic                  |
| NIfTI       | .nii           | Neuroimaging Informatics Technology Initiative |
| MINC        | .mnc           | Montreal Neurological Institute                |

### What is DICOM?
  - DICOM is a standard for handling medical images and related information.
  - It enables interoperability between different medical imaging devices and systems.

### Key Concepts
  - **SOP Class (Service-Object Pair Class):** Defines a specific type of medical image or related data (e.g., X-ray, MRI, CT scan).
  - **DICOM File:** A file containing image data and metadata, often with the extension `.dcm`.
  - **Attributes:** Information associated with an image (e.g., patient name, study date, pixel data).
  - **Pixel Data:** The actual image pixels (intensity values).

### DICOM Header
  - Contains metadata in a structured format.
  - Includes patient information, acquisition parameters, and more.
  - Encoded using DICOM tags (e.g., `(0010,0010)` for patient name).

### DICOM Tags
  - Each attribute has a unique tag (group and element number).
  - Tags are represented in hexadecimal (e.g., `(0010,0010)`).

### Transfer Syntax
  - Defines how data is encoded for transmission (e.g., Little Endian, JPEG).
  - Ensures compatibility across different systems.

### Common DICOM Elements
  - `PatientName`, `PatientID`, `StudyDate`, `Modality`, `PixelSpacing`, etc.