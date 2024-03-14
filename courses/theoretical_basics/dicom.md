---
layout: page
title: Theoretical Basics
subtitle: DICOM
---

## 📋 Content
- [📋 Content](#-content)
- [What is DICOM?](#what-is-dicom)
- [Key Concepts](#key-concepts)
- [DICOM Header](#dicom-header)
- [DICOM Tags](#dicom-tags)
- [Transfer Syntax](#transfer-syntax)
- [Common DICOM Elements](#common-dicom-elements)


From imaging scanners, like MRI or CT, images are initially collected in the DICOM format and can be converted to these other formats to make working with the data easier.

| Format Name | File Extension | Origin                                         |
|-------------|----------------|------------------------------------------------|
| DICOM       | .dcm           | ACR/NEMA Consortium                            |
| Analyze     | .img/.hdr      | Analyze Software, Mayo Clinic                  |
| NIfTI       | .nii           | Neuroimaging Informatics Technology Initiative |
| MINC        | .mnc           | Montreal Neurological Institute                |

## What is DICOM?
  - DICOM is a standard for handling medical images and related information.
  - It enables interoperability between different medical imaging devices and systems.

## Key Concepts
  - **SOP Class (Service-Object Pair Class):** Defines a specific type of medical image or related data (e.g., X-ray, MRI, CT scan).
  - **DICOM File:** A file containing image data and metadata, often with the extension `.dcm`.
  - **Attributes:** Information associated with an image (e.g., patient name, study date, pixel data).
  - **Pixel Data:** The actual image pixels (intensity values).

## DICOM Header
  - Contains metadata in a structured format.
  - Includes patient information, acquisition parameters, and more.
  - Encoded using DICOM tags (e.g., `(0010,0010)` for patient name).

## DICOM Tags
  - Each attribute has a unique tag (group and element number).
  - Tags are represented in hexadecimal (e.g., `(0010,0010)`).

## Transfer Syntax
  - Defines how data is encoded for transmission (e.g., Little Endian, JPEG).
  - Ensures compatibility across different systems.

## Common DICOM Elements
  - `PatientName`, `PatientID`, `StudyDate`, `Modality`, `PixelSpacing`, etc.