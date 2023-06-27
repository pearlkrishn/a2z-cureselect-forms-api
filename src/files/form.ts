import * as dotenv from 'dotenv';
dotenv.config();

const defaultSchema = {
  deleted_at: {
    type: Date,
  },
  provider_id: {
    type: String,
    required: true,
  },
  owner_id: {
    type: String,
    required: true,
  },
  pet_id: {
    type: String,
    required: true,
  },
};
export const form = {
  chief_complaints: {
    name: 'Chief Complaints',
    slug: 'chief_complaints',
    has_list: false,
    value: [
      [
        {
          type: 'date',
          format: 'YYYY-MM-DD',
          slug: 'date',
          label: 'Date',
          icon: 'calendar-blank-outline',
          placeholder: 'YYYY / MM / DD',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'time',
          format: 'HH:mm',
          slug: 'time',
          label: 'Time',
          icon: 'clock-outline',
          placeholder: 'HH:MM',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
      ],
      {
        type: 'text',
        slug: 'title',
        label: 'Chief Complaint',
        placeholder: 'Complaint Title',
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
        ],
      },
      {
        type: 'text',
        slug: 'description',
        placeholder: 'Details you think is important for us to know',
      },
      {
        type: 'file',
        slug: 'attachment',
        label: 'Attachment',
        extensions: ['pdf', 'doc', 'png', 'jpg'],
      },
    ],
    schema: {
      date: Date,
      time: String,
      title: String,
      description: String,
      attachment: [
        { file_path: String, file_name: String, s3_signed_url: String },
      ],
      ...defaultSchema,
    },
  },
  deworming: {
    name: 'Deworming',
    slug: 'deworming',
    has_list: false,
    value: [
      [
        {
          type: 'date',
          format: 'YYYY-MM-DD',
          slug: 'date',
          label: 'Date',
          icon: 'calendar-blank-outline',
          placeholder: 'YYYY / MM / DD',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'time',
          format: 'HH:mm',
          slug: 'time',
          label: 'Time',
          icon: 'clock-outline',
          placeholder: 'HH:MM',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
      ],
      {
        type: 'date',
        format: 'YYYY-MM-DD HH:mm:ss',
        slug: 'next_deworming_date',
        label: 'Next Deworming Date',
        icon: 'calendar-blank-outline',
        placeholder: 'YYYY / MM / DD HH:MM:SS',
        default_action: 'add',
        default_value: 45,
        default_unit: 'days',
      },
    ],
    schema: {
      date: Date,
      time: String,
      last_deworming_date: Date,
      next_deworming_date: Date,
      status: String,
      dewormings: [
        { date: Date, time: String, next_deworming_date: Date, status: String },
      ],
      ...defaultSchema,
    },
  },
  vaccination: {
    name: 'Vaccination',
    slug: 'vaccination',
    has_list: false,
    value: [
      [
        {
          type: 'date',
          format: 'YYYY-MM-DD',
          slug: 'date',
          label: 'Date',
          icon: 'calendar-blank-outline',
          placeholder: 'YYYY / MM / DD',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'time',
          format: 'HH:mm',
          slug: 'time',
          label: 'Time',
          icon: 'clock-outline',
          placeholder: 'HH:MM',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
      ],
      {
        type: 'select',
        slug: 'vaccine_type',
        label: 'Vaccine Type',
        placeholder: 'Select Type',
        options: [
          {
            label: 'Anti-Rabies',
            value: 'anti_rabies',
            dose: 2,
            interval: [15, 365],
          },
          {
            label: '9 in 1',
            value: '9_in_1',
            dose: 1,
            interval: 365,
          },
          {
            label: '8 in 1',
            value: '8_in_1',
            dose: 1,
            interval: 365,
          },
          {
            label: '5 in 1',
            value: '5_in_1',
            dose: 1,
            interval: 365,
          },
          {
            label: 'Distemper',
            value: 'distemper',
            dose: 1,
            interval: 365,
          },
          {
            label: 'Parvovirus',
            value: 'parvovirus',
            dose: 1,
            interval: 365,
          },
          {
            label: 'Adenovirus/Hepatitis',
            value: 'adenovirus_or_hepatitis',
            dose: 1,
            interval: 365,
          },
          {
            label: 'DA2PPV',
            value: 'da2ppv',
            dose: 1,
            interval: 365,
          },
          {
            label: 'Bordetella',
            value: 'bordetella',
            dose: 1,
            interval: 365,
          },
          {
            label: 'Canine Influenza (dog {flu influenza})',
            value: 'canine_influenza_dog_flu_influenza',
            dose: 1,
            interval: 365,
          },
          {
            label: 'Leptospirosis',
            value: 'leptospirosis',
            dose: 1,
            interval: 365,
          },
          {
            label: 'Lyme vaccine',
            value: 'lyme_vaccine',
            dose: 1,
            interval: 365,
          },
        ],
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
        ],
      },
      // {
      //   type: 'select',
      //   slug: 'vaccination',
      //   label: 'Vaccination',
      //   placeholder: 'Select',
      //   option_source: 'url',
      //   option_url: `${process.env.TELEVET_API_URL}/masters/vaccination`,
      //   option_slug: 'slug',
      //   option_label: 'name',
      //   validationRules: [
      //     {
      //       rule: 'required',
      //       args: [],
      //     },
      //   ],
      // },
      {
        type: 'radio',
        slug: 'dose',
        label: 'Dose',
        options: [
          {
            label: 'Dose 1',
            value: 'dose_1',
          },
          {
            label: 'Dose 2',
            value: 'dose_2',
            conditional: true,
            conditional_slug: 'type',
            conditional_value: 'anti_rabies',
            next_dose_date_value: 15,
            next_dose_date_unit: 'days',
          },
          {
            label: 'Booster',
            value: 'booster',
          },
        ],
      },
      {
        type: 'text',
        slug: 'notes',
        label: 'Notes',
        placeholder: 'Notes...',
      },
      {
        type: 'file',
        slug: 'attachment',
        label: 'Attachment',
        extensions: ['pdf', 'doc', 'png', 'jpg'],
      },
    ],
    schema: {
      date: Date,
      time: String,
      vaccine_type: String,
      vaccination: String,
      dose: String,
      next_dose_date: Date,
      notes: String,
      doses: [{ date: Date, dose: String }],
      attachment: [
        { file_path: String, file_name: String, s3_signed_url: String },
      ],
      ...defaultSchema,
    },
  },
  exams: {
    name: 'Exams',
    slug: 'exams',
    has_list: true,
    value: {
      general: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          options: [
            {
              slug: 'appearance',
              label: 'Appearance',
            },
            {
              slug: 'behaviour',
              label: 'Behaviour',
            },
            {
              slug: 'posture',
              label: 'Posture',
            },
          ],
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      mentation: [
        {
          type: 'checkbox', // multiselect
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/mentation`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      posture_and_gait: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/posture-and-gait`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      hydration_status: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/hydration-status`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      coat_and_skin: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/coat-and-skin`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      eyes: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/eyes`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      ears: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/ears`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      nose_and_throat: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/nose-and-throat`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      oral_cavity: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/oral-cavity`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      nervous_system: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/nervous-system`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      gastrointestinal_system: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/gastrointestinal-system`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      rectal_examination: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/rectal-examination`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      genital_system: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/genital-system`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      urinary_system: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/urinary-system`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      heart: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/heart`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      lungs: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/lungs`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      abdomen: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/abdomen`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
    },
    schema: {
      abnormal_symptoms: [String],
      notes: String,
      type: String,
      form_type: String,
      ...defaultSchema,
    },
  },
  notes: {
    name: 'Notes',
    slug: 'notes',
    has_list: false,
    value: [
      {
        type: 'text',
        slug: 'title',
        label: 'Notes Title',
        placeholder: 'Notes Title',
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
        ],
      },
      {
        type: 'text',
        slug: 'description',
        label: 'Notes Description',
        placeholder: 'Notes description',
      },
    ],
    schema: {
      title: String,
      description: String,
      ...defaultSchema,
    },
  },
  allergies: {
    name: 'Allergies',
    slug: 'allergies',
    has_list: false,
    value: [
      [
        {
          type: 'date',
          format: 'YYYY-MM-DD',
          slug: 'date',
          label: 'Date',
          icon: 'calendar-blank-outline',
          placeholder: 'YYYY / MM / DD',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'time',
          format: 'HH:mm',
          slug: 'time',
          label: 'Time',
          icon: 'clock-outline',
          placeholder: 'HH:MM',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
      ],
      {
        type: 'toggle',
        slug: 'rashes_on_the_skin',
        label: 'Rashes on the Skin',
        options: [
          {
            label: 'Yes',
            value: 'yes',
          },
          {
            label: 'No',
            value: 'no',
          },
        ],
      },
      {
        type: 'select',
        slug: 'cause_of_allergy',
        label: 'Cause of Allergy',
        placeholder: 'Select',
        options: [
          {
            label: 'Medication',
            value: 'medication',
          },
          {
            label: 'Environmental',
            value: 'environmental',
          },
          {
            label: 'Food',
            value: 'food',
          },
          {
            label: 'Shampoo/Products',
            value: 'shampoo_or_products',
          },
          {
            label: 'Parasites',
            value: 'parasites',
          },
          {
            label: 'Accessories',
            value: 'accessories',
          },
          {
            label: 'Seasonal',
            value: 'seasonal',
          },
          {
            label: 'Unknown',
            value: 'unknown',
          },
        ],
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
        ],
      },
      {
        type: 'select',
        slug: 'severity',
        label: 'Severity',
        placeholder: 'Select',
        options: [
          {
            label: 'Mild',
            value: 'mild',
          },
          {
            label: 'Moderate',
            value: 'moderate',
          },
          {
            label: 'Severe',
            value: 'severe',
          },
          {
            label: 'Requires Hospitalization',
            value: 'requires_hospitalization',
          },
        ],
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
        ],
      },
      {
        type: 'select',
        slug: 'symptoms',
        label: 'Symptoms',
        placeholder: 'Select',
        options: [
          {
            label: 'Itching',
            value: 'itching',
          },
          {
            label: 'Rashes',
            value: 'rashes',
          },
          {
            label: 'Hives',
            value: 'hives',
          },
          {
            label: 'Hairloss',
            value: 'hairloss',
          },
          {
            label: 'Watering eyes',
            value: 'watering_eyes',
          },
          {
            label: 'Sneezing',
            value: 'sneezing',
          },
          {
            label: 'Difficulty breathing',
            value: 'difficulty_breathing',
          },
          {
            label: 'Wheezing',
            value: 'wheezing',
          },
          {
            label: 'Retching',
            value: 'retching',
          },
          {
            label: 'Hyperventilation',
            value: 'hyperventilation',
          },
          {
            label: 'Swelling of the face, ears, lips, eyelids, or earflaps',
            value: 'swelling_of_the_face_ears_lips_eyelids_or_earflaps',
          },
          {
            label: 'Red, inflamed skin',
            value: 'red_inflamed_skin',
          },
          {
            label: 'Diarrhea',
            value: 'diarrhea',
          },
          {
            label: 'Vomiting',
            value: 'vomiting',
          },
          {
            label: 'Itchy ears',
            value: 'itchy_ears',
          },
          {
            label: 'Chronic ear infections',
            value: 'chronic_ear_infections',
          },
          {
            label: 'Itchy, runny eyes',
            value: 'itchy_runny_eyes',
          },
          {
            label: 'Constant licking',
            value: 'constant_licking',
          },
        ],
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
        ],
      },
      {
        type: 'select',
        slug: 'treated_by',
        label: 'Treated By',
        placeholder: 'Select',
        options: [
          {
            label: 'Chlorpheniramine',
            value: 'chlorpheniramine',
          },
          {
            label: 'Diphenhydramine',
            value: 'diphenhydramine',
          },
          {
            label: 'Ceterizine',
            value: 'ceterizine',
          },
          {
            label: 'Clemastine',
            value: 'clemastine',
          },
          {
            label: 'Hydroxyzine',
            value: 'hydroxyzine',
          },
          {
            label: 'Amitriptyline',
            value: 'amitriptyline',
          },
          {
            label: 'Cyproheptadine',
            value: 'cyproheptadine',
          },
        ],
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
        ],
      },
      {
        type: 'text',
        slug: 'notes',
        label: 'Notes',
        placeholder: 'Add notes',
      },
      {
        type: 'file',
        slug: 'attachment',
        label: 'Attachment',
        extensions: ['pdf', 'doc', 'png', 'jpg'],
      },
    ],
    schema: {
      date: Date,
      time: String,
      cause_of_allergy: String,
      rashes_on_the_skin: Boolean,
      severity: String,
      symptoms: String,
      treated_by: String,
      attachment: [
        { file_path: String, file_name: String, s3_signed_url: String },
      ],
      notes: String,
      ...defaultSchema,
    },
  },
  labs: {
    name: 'Labs',
    slug: 'labs',
    has_list: false,
    value: [
      [
        {
          type: 'date',
          format: 'YYYY-MM-DD',
          slug: 'date',
          label: 'Date',
          icon: 'calendar-blank-outline',
          placeholder: 'YYYY / MM / DD',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'time',
          format: 'HH:mm',
          slug: 'time',
          label: 'Time',
          icon: 'clock-outline',
          placeholder: 'HH:MM',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
      ],
      {
        type: 'text',
        slug: 'name',
        label: 'Test Name',
        placeholder: 'Enter test name',
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
        ],
      },
      {
        type: 'file',
        slug: 'attachment',
        label: 'Attachment',
        extensions: ['pdf', 'doc', 'png', 'jpg'],
      },
    ],
    schema: {
      date: Date,
      time: String,
      name: String,
      attachment: [
        { file_path: String, file_name: String, s3_signed_url: String },
      ],
      ...defaultSchema,
    },
  },
  radiology: {
    name: 'Radiology',
    slug: 'radiology',
    has_list: false,
    value: [
      [
        {
          type: 'date',
          format: 'YYYY-MM-DD',
          slug: 'date',
          label: 'Date',
          icon: 'calendar-blank-outline',
          placeholder: 'YYYY / MM / DD',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'time',
          format: 'HH:mm',
          slug: 'time',
          label: 'Time',
          icon: 'clock-outline',
          placeholder: 'HH:MM',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
      ],
      {
        type: 'text',
        slug: 'imaging_name',
        label: 'Imaging Name',
        placeholder: 'CT, MRI, X Ray, Ultrasound..',
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
        ],
      },
      {
        type: 'file',
        slug: 'attachment',
        label: 'Attachment',
        extensions: ['pdf', 'doc', 'png', 'jpg'],
      },
    ],
    schema: {
      date: Date,
      time: String,
      imaging_name: String,
      attachment: [
        { file_path: String, file_name: String, s3_signed_url: String },
      ],
      ...defaultSchema,
    },
  },
  treatments: {
    name: 'Treatments',
    slug: 'treatments',
    has_list: false,
    value: [
      [
        {
          type: 'date',
          format: 'YYYY-MM-DD',
          slug: 'date',
          label: 'Date',
          icon: 'calendar-blank-outline',
          placeholder: 'YYYY / MM / DD',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'time',
          format: 'HH:mm',
          slug: 'time',
          label: 'Time',
          icon: 'clock-outline',
          placeholder: 'HH:MM',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
      ],
      {
        type: 'text',
        slug: 'treatment_name',
        label: 'Treatment Name',
        placeholder: 'Treatment',
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
        ],
      },
      {
        type: 'text',
        slug: 'notes',
        label: 'Notes',
        placeholder: 'Add notes',
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
        ],
      },
    ],
    schema: {
      date: Date,
      time: String,
      treatment_name: String,
      notes: String,
      ...defaultSchema,
    },
  },
  medications: {
    name: 'Medications',
    slug: 'medications',
    has_list: false,
    value: [
      [
        {
          type: 'date',
          format: 'YYYY-MM-DD',
          slug: 'date',
          label: 'Date',
          icon: 'calendar-blank-outline',
          placeholder: 'YYYY / MM / DD',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'time',
          format: 'HH:mm',
          slug: 'time',
          label: 'Time',
          icon: 'clock-outline',
          placeholder: 'HH:MM',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
      ],
      {
        type: 'text',
        slug: 'medication_name',
        label: 'Medication Name',
        placeholder: 'Enter Medication Name',
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
        ],
      },
      [
        {
          type: 'text',
          slug: 'dosage',
          label: 'Dosage',
          placeholder: 'Dosage',
        },
        {
          type: 'select',
          slug: 'strength',
          label: 'Strength',
          placeholder: 'Select',
          options: [
            {
              label: 'Caplet',
              value: 'caplet',
            },
            {
              label: 'Caplet per 20 Pounds',
              value: 'caplet_per_20_pounds',
            },
            {
              label: 'Milligram',
              value: 'milligram',
            },
            {
              label: 'Milligram per Pound',
              value: 'milligram_per_pound',
            },
            {
              label: 'Milligram per 20 Pounds',
              value: 'milligram_per_20_pounds',
            },
            {
              label: 'Millilitre',
              value: 'millilitre',
            },
            {
              label: 'Millilitre per Pound',
              value: 'millilitre_per_pound',
            },
            {
              label: 'Teaspoon',
              value: 'teaspoon',
            },
            {
              label: 'Teaspoon per 5 Pounds',
              value: 'teaspoon_per_5_pounds',
            },
            {
              label: 'Teaspoon per 20 Pounds',
              value: 'teaspoon_per_20_pounds',
            },
            {
              label: 'Tbs',
              value: 'tbs',
            },
          ],
        },
      ],
      {
        type: 'select',
        slug: 'route',
        label: 'Route',
        placeholder: 'Select',
        options: [
          {
            label: 'Oral',
            value: 'oral',
          },
          {
            label: 'Parenteral',
            value: 'parenteral',
          },
          {
            label: 'Topical',
            value: 'topical',
          },
          {
            label: 'Rectal',
            value: 'rectal',
          },
          {
            label: 'Intramammary',
            value: 'intramammary',
          },
        ],
      },
      {
        type: 'select',
        slug: 'administration',
        label: 'Administration',
        placeholder: 'Select',
        option_url: `${process.env.TELEVET_API_URL}/masters/medication/{route}`,
        option_method: 'GET',
        option_label: 'name',
        option_slug: 'slug',
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
        ],
      },
      {
        type: 'select',
        slug: 'frequency',
        label: 'Frequency',
        placeholder: 'Select',
        options: [
          {
            label: 'Once a Day',
            value: 'once_a_day',
          },
          {
            label: 'Twice a Day',
            value: 'twice_a_day',
          },
          {
            label: 'Four Times a Day',
            value: 'four_times_a_day',
          },
          {
            label: 'Once or Twice a Day',
            value: 'once_or_twice_a_day',
          },
          {
            label: '2 to 3 Times a Day',
            value: '2_to_3_times_a_day',
          },
          {
            label: '3 to 4 Times a Day',
            value: '3_to_4_times_a_day',
          },
          {
            label: '4 to 6 Times a Day',
            value: '4_to_6_times_a_day',
          },
          {
            label: 'More than 6 Times a Day',
            value: 'more_than_6_times_a_day',
          },
        ],
      },
      {
        type: 'text',
        slug: 'no_of_days',
        label: 'No Of Days',
        placeholder: 'No Of Days',
      },
      {
        type: 'text',
        slug: 'reason_for_medication',
        label: 'Reason For Medication',
        placeholder: 'Reason',
      },
    ],
    schema: {
      date: Date,
      time: String,
      medication_name: String,
      dosage: String,
      strength: String,
      route: String,
      administration: String,
      frequency: String,
      no_of_days: String,
      reason_for_medication: String,
      status: {
        type: String,
        default: 'active',
      },
      ...defaultSchema,
    },
  },
  vitals: {
    name: 'Vitals',
    slug: 'vitals',
    has_list: true,
    value: {
      temperature: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'radio',
          slug: 'type',
          label: 'Type',
          options: [
            {
              label: 'Oral',
              value: 'oral',
            },
            {
              label: 'Rectal',
              value: 'rectal',
            },
          ],
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'radio',
          slug: 'mode',
          label: 'Mode',
          options: [
            {
              label: 'Fahrenheit',
              value: 'fahrenheit',
            },
            {
              label: 'Celsius',
              value: 'celsius',
            },
          ],
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'slider',
          slug: 'value',
          label: 'Value',
          min: 0,
          max: 200,
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'radio',
          slug: 'status',
          label: 'Status',
          options: [
            {
              label: 'Low',
              value: 'low',
            },
            {
              label: 'Normal',
              value: 'normal',
            },
            {
              label: 'Elevated',
              value: 'elevated',
            },
            {
              label: 'High',
              value: 'high',
            },
          ],
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
      ],
      heart_rate: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'slider',
          slug: 'bpm',
          label: 'Beats Per Minute',
          min: 0,
          max: 500,
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'radio',
          slug: 'status',
          label: 'Status',
          options: [
            {
              label: 'Low',
              value: 'low',
            },
            {
              label: 'Normal',
              value: 'normal',
            },
            {
              label: 'Elevated',
              value: 'elevated',
            },
            {
              label: 'High',
              value: 'high',
            },
          ],
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
      ],
      respiratory_rate: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'slider',
          slug: 'bpm',
          label: 'Breaths Per Minute',
          min: 0,
          max: 100,
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'radio',
          slug: 'status',
          label: 'Status',
          options: [
            {
              label: 'Low',
              value: 'low',
            },
            {
              label: 'Normal',
              value: 'normal',
            },
            {
              label: 'Elevated',
              value: 'elevated',
            },
            {
              label: 'High',
              value: 'high',
            },
          ],
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
      ],
      mucous_membrane: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'select',
          slug: 'color',
          label: 'Color',
          placeholder: 'Select a color',
          options: [
            {
              label: 'Pale',
              value: 'pale',
            },
            {
              label: 'Pink',
              value: 'pink',
            },
            {
              label: 'White',
              value: 'white',
            },
            {
              label: 'Inflamed',
              value: 'inflamed',
            },
          ],
        },
        {
          type: 'toggle',
          slug: 'icterus',
          label: 'Icterus',
          options: [
            {
              label: 'Yes',
              value: 'yes',
            },
            {
              label: 'No',
              value: 'no',
            },
          ],
        },
      ],
      height: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'text',
          format: 'number',
          slug: 'height',
          label: 'Height in cm',
          placeholder: 'Enter height',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'radio',
          slug: 'status',
          label: 'Status',
          options: [
            {
              label: 'Low',
              value: 'low',
            },
            {
              label: 'Normal',
              value: 'normal',
            },
            {
              label: 'Elevated',
              value: 'elevated',
            },
            {
              label: 'High',
              value: 'high',
            },
          ],
        },
      ],
      weight: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'text',
          format: 'number',
          slug: 'weight',
          label: 'Weight in kg',
          placeholder: 'Enter weight',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'radio',
          slug: 'status',
          label: 'Status',
          options: [
            {
              label: 'Low',
              value: 'low',
            },
            {
              label: 'Normal',
              value: 'normal',
            },
            {
              label: 'Elevated',
              value: 'elevated',
            },
            {
              label: 'High',
              value: 'high',
            },
          ],
        },
      ],
      blood_pressure: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'text',
          format: 'number',
          slug: 'systolic',
          label: 'Systolic',
          placeholder: 'Enter systolic',
        },
        {
          type: 'text',
          format: 'number',
          slug: 'diastolic',
          label: 'Diastolic',
          placeholder: 'Enter diastolic',
        },
        {
          type: 'text',
          format: 'number',
          slug: 'pulse',
          label: 'Pulse',
          placeholder: 'Enter pulse',
        },
        {
          type: 'radio',
          slug: 'status',
          label: 'Status',
          options: [
            {
              label: 'Low',
              value: 'low',
            },
            {
              label: 'Normal',
              value: 'normal',
            },
            {
              label: 'Elevated',
              value: 'elevated',
            },
            {
              label: 'High',
              value: 'high',
            },
          ],
        },
      ],
    },
    schema: {
      date: Date,
      time: String,
      type: String,
      mode: String,
      value: Number,
      status: String,
      bpm: Number,
      color: String,
      icterus: String,
      height: Number,
      weight: Number,
      systolic: Number,
      diastolic: Number,
      pulse: Number,
      form_type: String,
      ...defaultSchema,
    },
  },
  history: {
    name: 'History',
    slug: 'history',
    has_list: true,
    value: {
      medical: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'select',
          slug: 'condition',
          label: 'Condition',
          placeholder: 'Select',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/disease`,
          option_method: 'GET',
          option_label: 'name',
          option_slug: 'slug',
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes..',
        },
      ],
      surgical: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'select',
          slug: 'procedure_names',
          label: 'Procedure Names',
          placeholder: 'Select',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/surgical-procedure`,
          option_method: 'GET',
          option_label: 'name',
          option_slug: 'slug',
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes..',
        },
      ],
      estrus: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'text',
          slug: 'no_of_cycles',
          label: 'No of Cycles',
          placeholder: 'Enter estrus cycle',
        },
        {
          type: 'select',
          slug: 'pregnancy_type',
          label: 'Pregnancy Type & Labor',
          placeholder: 'Select',
          options: [
            {
              label: 'Normal',
              value: 'normal',
            },
            {
              label: 'C-Section',
              value: 'c_section',
            },
            {
              label: 'Miscarriage',
              value: 'miscarriage',
            },
          ],
        },
        {
          type: 'select',
          slug: 'previous_litters_status',
          label: 'Previous Litters Status',
          placeholder: 'Select',
          options: [
            {
              label: 'All Alive',
              value: 'all_alive',
            },
            {
              label: 'Partially Survived',
              value: 'partially_survived',
            },
            {
              label: 'Preterm',
              value: 'preterm',
            },
            {
              label: 'All Expired',
              value: 'all_expired',
            },
          ],
        },
        {
          type: 'toggle',
          slug: 'sudo_pregnancy',
          label: 'Sudo Pregnancy',
          options: [
            {
              label: 'Yes',
              value: 'yes',
            },
            {
              label: 'No',
              value: 'no',
            },
          ],
        },
      ],
      dermal: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'multi-select',
          slug: 'clinical_sign',
          label: 'Clinical Sign',
          placeholder: 'Select',
          options: [
            {
              label: 'Scratching/licking/biting at self',
              value: 'scratching_licking_biting_at_self',
            },
            {
              label: 'Hair loss or poor regrowth of hair',
              value: 'hair_loss_or_poor_regrowth_of_hair',
            },
            {
              label: 'Increased redness to skin',
              value: 'increased_redness_to_skin',
            },
            {
              label: 'Small red spots, pimples, bumps, rash',
              value: 'small_red_spots_pimples_bumps_rash',
            },
            {
              label: 'Dandruff, flakiness, scaliness of skin',
              value: 'dandruff_flakiness_scaliness_of_skin',
            },
            {
              label: 'Increased odor of skin or coat',
              value: 'increased_odor_of_skin_or_coat',
            },
            {
              label: 'Crusty or scabby patches on skin',
              value: 'crusty_or_scabby_patches_on_skin',
            },
            {
              label: 'Open, raw sores',
              value: 'open_raw_sores',
            },
            {
              label: 'Areas that ooze blood or pus',
              value: 'areas_that_ooze_blood_or_pus',
            },
            {
              label: 'Eyes-redness, irritation, itching, discharge',
              value: 'eyes_redness_irritation_itching_discharge',
            },
            {
              label: 'Change in color or texture of hair',
              value: 'change_in_color_or_texture_of_hair',
            },
            {
              label: 'Darkening of areas of the skin',
              value: 'darkening_of_areas_of_the_skin',
            },
            {
              label: 'Loss of pigment of skin-black parts turn pink',
              value: 'loss_of_pigment_of_skin_black_parts_turn_pink',
            },
            {
              label: 'Ear infections',
              value: 'ear_infections',
            },
            {
              label: 'Fleas seen on pet',
              value: 'fleas_seen_on_pet',
            },
            {
              label: 'Diarrhea or loose stools',
              value: 'diarrhea_or_loose_stools',
            },
            {
              label: 'Vomiting',
              value: 'vomiting',
            },
            {
              label: 'Sneezing or wheezing',
              value: 'sneezing_or_wheezing',
            },
            {
              label: "Changes in pet's usual personality",
              value: 'changes_in_pets_usual_personality',
            },
            {
              label: "Changes in pet's usual activity level",
              value: 'changes_in_pets_usual_activity_level',
            },
            {
              label: 'Weight loss or weight gain',
              value: 'weight_loss_or_weight_gain',
            },
            {
              label: "Changes in pet's appetite",
              value: 'changes_in_pets_appetite',
            },
            {
              label: 'Changes in amount of water consumed',
              value: 'changes_in_amount_of_water_consumed',
            },
            {
              label: 'Changes in urinary habits',
              value: 'changes_in_urinary_habits',
            },
          ],
        },
        {
          type: 'multi-select',
          slug: 'body_area',
          label: 'Body Area',
          placeholder: 'Select',
          options: [
            {
              label: 'Feet/paws',
              value: 'feet_paws',
            },
            {
              label: 'Legs/arms',
              value: 'legs_arms',
            },
            {
              label: 'Abdomen (belly)/genital area',
              value: 'abdomen_belly_genital_area',
            },
            {
              label: 'Armpits/chest/sides of body',
              value: 'armpits_chest_sides_of_body',
            },
            {
              label: 'Face/eyes',
              value: 'face_eyes',
            },
            {
              label: 'Ears/ear flaps',
              value: 'ears_ear_flaps',
            },
            {
              label: 'Along the back or rump',
              value: 'along_the_back_or_rump',
            },
            {
              label: 'The tail itself',
              value: 'the_tail_itself',
            },
            {
              label: 'Anal area',
              value: 'anal_area',
            },
          ],
        },
        {
          type: 'select',
          slug: 'itching',
          label: 'Itching',
          placeholder: 'Select',
          options: [
            {
              label: 'Not itchy',
              value: 'not_itchy',
            },
            {
              label: 'Mildly itchy',
              value: 'mildly_itchy',
            },
            {
              label: 'Moderately itchy',
              value: 'moderately_itchy',
            },
            {
              label: 'Severely itchy',
              value: 'severely_itchy',
            },
          ],
        },
        {
          type: 'multi-select',
          slug: 'treatment_or_medication',
          label: 'Treatment or Medication',
          placeholder: 'Select',
          options: [
            {
              label:
                'Cortisone pills or shots (steroids, Temaril, prednisone, Vetalog, anti-itch pills)',
              value:
                'cortisone_pills_or_shots_steroids_temaril_prednisone_vetalog_anti_itch_pills',
            },
            {
              label:
                'Antibiotics alone (with no other medication given at the same time)',
              value:
                'antibiotics_alone_with_no_other_medication_given_at_the_same_time',
            },
            {
              label: 'Antihistamine (Benadryl, Zyrtec, etc.)',
              value: 'antihistamine_benadryl_zyrtec_etc',
            },
            {
              label: 'Antifungal medication (Nizoral, etc.)',
              value: 'antifungal_medication_nizoral_etc',
            },
            {
              label: 'Cyclosporine (Atopica)',
              value: 'cyclosporine_atopica',
            },
            {
              label: 'Apoquel',
              value: 'apoquel',
            },
            {
              label: 'Allergy shots or drops',
              value: 'allergy_shots_or_drops',
            },
          ],
        },
        {
          type: 'select',
          slug: 'cause',
          label: 'Cause',
          placeholder: 'Select',
          options: [
            {
              label: 'Environmental Allergies',
              value: 'environmental_allergies',
            },
            {
              label: 'Food Allergies',
              value: 'food_allergies',
            },
            {
              label: 'Folliculitis',
              value: 'folliculitis',
            },
            {
              label: 'Impetigo',
              value: 'impetigo',
            },
            {
              label: 'Ringworm',
              value: 'ringworm',
            },
            {
              label: 'Mange',
              value: 'mange',
            },
            {
              label: 'Yeast Infections',
              value: 'yeast_infections',
            },
            {
              label: 'Ticks and Fleas',
              value: 'ticks_and_fleas',
            },
          ],
        },
        {
          type: 'select',
          slug: 'improvement',
          label: 'Improvement',
          placeholder: 'Select',
          options: [
            {
              label: 'None',
              value: 'none',
            },
            {
              label: 'Mild',
              value: 'mild',
            },
            {
              label: 'Moderate',
              value: 'moderate',
            },
            {
              label: 'Good',
              value: 'good',
            },
            {
              label: 'Cured',
              value: 'cured',
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes..',
        },
        {
          type: 'file',
          slug: 'attachment',
          label: 'Attachment',
          extensions: ['pdf', 'doc', 'png', 'jpg'],
        },
      ],
      diet: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'text',
          slug: 'staple',
          label: 'Staple',
          placeholder: 'Add notes..',
        },
        {
          type: 'text',
          slug: 'table_food',
          label: 'Table Food',
          placeholder: 'Add notes..',
        },
        {
          type: 'text',
          slug: 'treats',
          label: 'Treats',
          placeholder: 'Add notes..',
        },
      ],
      grooming: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'radio',
          slug: 'grooming',
          label: 'Grooming',
          options: [
            {
              label: 'Well Groomed',
              value: 'well_groomed',
            },
            {
              label: 'Poorly Groomed',
              value: 'poorly_groomed',
            },
          ],
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
      ],
      breeder: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'text',
          slug: 'name',
          label: 'Name',
          placeholder: 'Enter name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'remarks',
          label: 'Remarks',
          placeholder: 'Add remarks..',
        },
      ],
      behavior: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'select',
          slug: 'house_soiling',
          label: 'House Soiling',
          placeholder: 'Select',
          options: [
            {
              label: 'Frequently',
              value: 'frequently',
            },
            {
              label: 'Never',
              value: 'never',
            },
            {
              label: 'Sometimes',
              value: 'sometimes',
            },
            {
              label: "Don't know",
              value: 'dont_know',
            },
          ],
        },
        {
          type: 'select',
          slug: 'excessive_barking',
          label: 'Excessive Barking',
          placeholder: 'Select',
          options: [
            {
              label: 'Frequently',
              value: 'frequently',
            },
            {
              label: 'Never',
              value: 'never',
            },
            {
              label: 'Sometimes',
              value: 'sometimes',
            },
            {
              label: "Don't know",
              value: 'dont_know',
            },
          ],
        },
        {
          type: 'select',
          slug: 'consuming_non_food_objects',
          label: 'Consuming Non food objects',
          placeholder: 'Select',
          options: [
            {
              label: 'Frequently',
              value: 'frequently',
            },
            {
              label: 'Never',
              value: 'never',
            },
            {
              label: 'Sometimes',
              value: 'sometimes',
            },
            {
              label: "Don't know",
              value: 'dont_know',
            },
          ],
        },
        {
          type: 'select',
          slug: 'reaction_to_strangers',
          label: 'Reaction to strangers',
          placeholder: 'Select',
          options: [
            {
              label: 'Happy',
              value: 'happy',
            },
            {
              label: 'Neutral',
              value: 'neutral',
            },
            {
              label: 'Fearful & Anxious',
              value: 'fearful_and_anxious',
            },
            {
              label: 'Barks & Growls',
              value: 'barks_and_growls',
            },
            {
              label: 'Snaps or bites',
              value: 'Snaps_or_bites',
            },
            {
              label: 'Attacks',
              value: 'attacks',
            },
          ],
        },
        {
          type: 'select',
          slug: 'reaction_to_other_animals',
          label: 'Reaction to other animals',
          placeholder: 'Select',
          options: [
            {
              label: 'Happy',
              value: 'happy',
            },
            {
              label: 'Neutral',
              value: 'neutral',
            },
            {
              label: 'Fearful & Anxious',
              value: 'fearful_and_anxious',
            },
            {
              label: 'Barks & Growls',
              value: 'barks_and_growls',
            },
            {
              label: 'Snaps or bites',
              value: 'Snaps_or_bites',
            },
            {
              label: 'Attacks',
              value: 'attacks',
            },
          ],
        },
        {
          type: 'select',
          slug: 'off_the_leash',
          label: 'Off the leash',
          placeholder: 'Select',
          options: [
            {
              label: 'Happy',
              value: 'happy',
            },
            {
              label: 'Neutral',
              value: 'neutral',
            },
            {
              label: 'Fearful & Anxious',
              value: 'fearful_and_anxious',
            },
            {
              label: 'Barks & Growls',
              value: 'barks_and_growls',
            },
            {
              label: 'Snaps or bites',
              value: 'Snaps_or_bites',
            },
            {
              label: 'Attacks',
              value: 'attacks',
            },
          ],
        },
        {
          type: 'select',
          slug: 'veterinary_visits',
          label: 'Veterinary visits',
          placeholder: 'Select',
          options: [
            {
              label: 'Happy',
              value: 'happy',
            },
            {
              label: 'Neutral',
              value: 'neutral',
            },
            {
              label: 'Fearful & Anxious',
              value: 'fearful_and_anxious',
            },
            {
              label: 'Barks & Growls',
              value: 'barks_and_growls',
            },
            {
              label: 'Snaps or bites',
              value: 'Snaps_or_bites',
            },
            {
              label: 'Attacks',
              value: 'attacks',
            },
            {
              label: 'Confused',
              value: 'confused',
            },
          ],
        },
        {
          type: 'select',
          slug: 'being_left_alone',
          label: 'Being left alone',
          placeholder: 'Select',
          options: [
            {
              label: 'Happy',
              value: 'happy',
            },
            {
              label: 'Neutral',
              value: 'neutral',
            },
            {
              label: 'Fearful & Anxious',
              value: 'fearful_and_anxious',
            },
            {
              label: 'Barks & Growls',
              value: 'barks_and_growls',
            },
            {
              label: 'Snaps or bites',
              value: 'Snaps_or_bites',
            },
            {
              label: 'Confused',
              value: 'confused',
            },
          ],
        },
        {
          type: 'select',
          slug: 'in_vehicles',
          label: 'In vehicles',
          placeholder: 'Select',
          options: [
            {
              label: 'Happy',
              value: 'happy',
            },
            {
              label: 'Neutral',
              value: 'neutral',
            },
            {
              label: 'Fearful & Anxious',
              value: 'fearful_and_anxious',
            },
            {
              label: 'Barks & Growls',
              value: 'barks_and_growls',
            },
            {
              label: 'Snaps or bites',
              value: 'Snaps_or_bites',
            },
            {
              label: 'Confused',
              value: 'confused',
            },
          ],
        },
        {
          type: 'select',
          slug: 'loud_noises',
          label: 'Loud Noises',
          placeholder: 'Select',
          options: [
            {
              label: 'Happy',
              value: 'happy',
            },
            {
              label: 'Neutral',
              value: 'neutral',
            },
            {
              label: 'Fearful & Anxious',
              value: 'fearful_and_anxious',
            },
            {
              label: 'Barks & Growls',
              value: 'barks_and_growls',
            },
            {
              label: 'Snaps or bites',
              value: 'Snaps_or_bites',
            },
            {
              label: 'Destructive',
              value: 'destructive',
            },
          ],
        },
        {
          type: 'select',
          slug: 'bathing',
          label: 'Bathing',
          placeholder: 'Select',
          options: [
            {
              label: 'Cooperative',
              value: 'cooperative',
            },
            {
              label: 'Uncooperative',
              value: 'uncooperative',
            },
          ],
        },
        {
          type: 'select',
          slug: 'on_a_leash_or_collar',
          label: 'On a leash or collar',
          placeholder: 'Select',
          options: [
            {
              label: 'Happy',
              value: 'happy',
            },
            {
              label: 'Neutral',
              value: 'neutral',
            },
            {
              label: 'Fearful & Anxious',
              value: 'fearful_and_anxious',
            },
            {
              label: 'Barks & Growls',
              value: 'barks_and_growls',
            },
            {
              label: 'Snaps or bites',
              value: 'Snaps_or_bites',
            },
            {
              label: 'Confused',
              value: 'confused',
            },
          ],
        },
      ],
      steroid: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'text',
          slug: 'name',
          label: 'Name',
          placeholder: 'Steroid name',
        },
        {
          type: 'select',
          slug: 'type',
          label: 'Type',
          placeholder: 'Select',
          options: [
            {
              label: 'Capsules',
              value: 'capsules',
            },
            {
              label: 'Chewables',
              value: 'chewables',
            },
            {
              label: 'liquids',
              value: 'liquids',
            },
            {
              label: 'Tablets',
              value: 'tablets',
            },
            {
              label: 'Transdermals',
              value: 'transdermals',
            },
          ],
        },
        [
          {
            type: 'text',
            slug: 'dosage',
            label: 'Dosage',
            placeholder: 'Dosage',
          },
          {
            type: 'select',
            slug: 'strength',
            label: 'Strength',
            placeholder: 'Select',
            options: [
              {
                label: 'Caplet',
                value: 'caplet',
              },
              {
                label: 'Caplet per 20 Pounds',
                value: 'caplet_per_20_pounds',
              },
              {
                label: 'Milligram',
                value: 'milligram',
              },
              {
                label: 'Milligram per Pound',
                value: 'milligram_per_pound',
              },
              {
                label: 'Milligram per 20 Pounds',
                value: 'milligram_per_20_pounds',
              },
              {
                label: 'Millilitre',
                value: 'millilitre',
              },
              {
                label: 'Millilitre per Pound',
                value: 'millilitre_per_pound',
              },
              {
                label: 'Teaspoon',
                value: 'teaspoon',
              },
              {
                label: 'Teaspoon per 5 Pounds',
                value: 'teaspoon_per_5_pounds',
              },
              {
                label: 'Teaspoon per 20 Pounds',
                value: 'teaspoon_per_20_pounds',
              },
              {
                label: 'Tbs',
                value: 'tbs',
              },
            ],
          },
        ],
        {
          type: 'select',
          slug: 'frequency',
          label: 'Frequency',
          placeholder: 'Select',
          options: [
            {
              label: 'Once a Day',
              value: 'once_a_day',
            },
            {
              label: 'Twice a Day',
              value: 'twice_a_day',
            },
            {
              label: 'Four Times a Day',
              value: 'four_times_a_day',
            },
            {
              label: 'Once or Twice a Day',
              value: 'once_or_twice_a_day',
            },
            {
              label: '2 to 3 Times a Day',
              value: '2_to_3_times_a_day',
            },
            {
              label: '3 to 4 Times a Day',
              value: '3_to_4_times_a_day',
            },
            {
              label: '4 to 6 Times a Day',
              value: '4_to_6_times_a_day',
            },
            {
              label: 'More than 6 Times a Day',
              value: 'more_than_6_times_a_day',
            },
          ],
        },
        {
          type: 'text',
          slug: 'no_of_times_treated_past_year',
          label: 'No of times treated past year',
          placeholder: 'No of times treated past year',
        },
        {
          type: 'select',
          slug: 'response_to_steroids',
          label: 'Response to steroids',
          placeholder: 'Select',
          options: [
            {
              label: 'Excellent Response',
              value: 'excellent_response',
            },
            {
              label: 'No Response',
              value: 'no_response',
            },
            {
              label: 'Temporary Response',
              value: 'temporary_response',
            },
          ],
        },
      ],
    },
    schema: {
      date: Date,
      time: String,
      condition: String,
      notes: String,
      procedure_names: String,
      no_of_cycles: Number,
      pregnancy_type: String,
      previous_litters_status: String,
      sudo_pregnancy: String,
      staple: String,
      table_food: String,
      treats: String,
      grooming: String,
      breeder: String,
      name: String,
      remarks: String,
      dosage: String,
      no_of_times_treated_past_year: String,
      response_to_steroids: String,
      strength: String,
      frequency: String,
      house_soiling: String,
      excessive_barking: String,
      consuming_non_food_objects: String,
      reaction_to_strangers: String,
      reaction_to_other_animals: String,
      off_the_leash: String,
      veterinary_visits: String,
      being_left_alone: String,
      in_vehicles: String,
      loud_noises: String,
      type: String,
      form_type: String,
      bathing: String,
      clinical_sign: [String],
      body_area: [String],
      itching: String,
      treatment_or_medication: [String],
      cause: String,
      improvement: String,
      on_a_leash_or_collar: String,
      ...defaultSchema,
    },
  },
  appointment: {
    name: 'Appointment',
    slug: 'appointment',
    has_list: false,
    value: [
      {
        type: 'select',
        slug: 'provider_id',
        label: 'Choose Doctor',
        placeholder: 'Select',
        option_source: 'url',
        option_url: `${process.env.TELEVET_API_URL}/providers`,
        option_method: 'GET',
        option_token_type: 'Bearer',
        option_label: 'user.first_name',
        option_slug: 'id',
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
        ],
      },
      {
        type: 'radio',
        slug: 'type',
        label: 'Type',
        option_default: 'teleconsult',
        options: [
          {
            label: 'TeleConsult',
            value: 'teleconsult',
          },
          {
            label: 'Walkin',
            value: 'walkin',
          },
        ],
      },
      {
        type: 'slots',
        slug: 'slots',
        range: 7,
        range_unit: 'days',
      },
      {
        type: 'text',
        slug: 'reason',
        label: 'Reason for Consult',
        placeholder: 'Describe',
      },
    ],
  },
};
