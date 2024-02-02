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


## 📄 Description
This directory contains a few basic notebooks to learn more about the DICOM file format, the conversion to Nifti and other additional file formats.

By the end of these notebooks, you should feel more comfortable with:
- the basics of DICOM data
- to handle DICOM metadata and to modify these
- Nifti file format and how to convert different file formats


## 📣 Current announcements
...


## ❗ Course requirements
- more ...


## 📒 Syllabus
- Basic concepts of DICOM <a href="https://colab.research.google.com/github/University-Clinic-of-Neuroradiology/python-bootcamp/blob/main/notebooks/DICOM/01_introduction.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>
- Basic concepts of Nifti and Data Conversion <a href="https://colab.research.google.com/github/University-Clinic-of-Neuroradiology/python-bootcamp/blob/main/notebooks/DICOM/02_dicom2nifti.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>
- Different File Formats and Data Conversion <a href="https://colab.research.google.com/github/University-Clinic-of-Neuroradiology/python-bootcamp/blob/main/notebooks/DICOM/03_optional.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>


## 📝 Theoretical basics
For some information on the topic, take a look at the [slides](https://raw.githack.com/University-Clinic-of-Neuroradiology/python-bootcamp/main/notebooks/DICOM/slides/DICOM.slides.html#/).

From imaging scanners, like MRI or CT, images are initially collected in the DICOM format and can be converted to these other formats to make working with the data easier.

| Format Name | File Extension | Origin                                         |
|-------------|----------------|------------------------------------------------|
| DICOM       | .dcm           | ACR/NEMA Consortium                            |
| Analyze     | .img/.hdr      | Analyze Software, Mayo Clinic                  |
| NIfTI       | .nii           | Neuroimaging Informatics Technology Initiative |
| MINC        | .mnc           | Montreal Neurological Institute                |