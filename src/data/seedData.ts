import {
  ExternalArticle,
  EducationalPost,
  WeeklyTheme,
  Quiz,
  ResearchItem,
  WebsiteSettings,
} from '../types';

export const INITIAL_SETTINGS: WebsiteSettings = {
  name: 'Biochem & Biotech Hub',
  tagline: 'Learn · Explore · Innovate',
  description:
    'Biochem & Biotech Hub is an independent educational, science-curation, and community platform dedicated to making life sciences accessible, engaging, and connected to real-world applications and scientific developments.',
  contactPhone1: '+92 304 4199010',
  phoneLink1: 'tel:+923044199010',
  whatsAppLink1: 'https://wa.me/923044199010',
  contactPhone2: '+92 314 3777168',
  phoneLink2: 'tel:+923143771768',
  whatsAppLink2: 'https://wa.me/923143771768',
  whatsAppChannel: 'https://whatsapp.com/channel/0029VbE9guD8kyyMlIZTDo0J',
  whatsAppCommunity: 'https://chat.whatsapp.com/BmCNeciC61sIfSZXm4VZa0?s=cl&p=a&iam=2',
  showCommunityGroup: true,
  founderLinkedIn: 'https://www.linkedin.com/in/huzaifa-hussain-217bb43b1/',
  founderName: 'Founder',
  officialEmail: 'double11two@gmail.com',
  instagram: 'https://www.instagram.com/biochem.biotech.hub?xtok=NzQ2cnB4Y2dtY2d1',
  tikTok: 'https://www.tiktok.com/@biochem.biotech.hu?_r=1&_t=ZS-9BCef7C0oLM',
  adminPasscode: 'biotech2026',
};

export const INITIAL_EXTERNAL_ARTICLES: ExternalArticle[] = [
  {
    id: 'ext-01',
    title: 'De Novo Designed Luciferase Enzymes Rival Natural Bioluminescent Efficiency',
    publisher: 'Nature',
    originalUrl: 'https://www.nature.com/articles/s41586-023-05710-w',
    publicationDate: 'March 14, 2026',
    category: 'Biotechnology',
    originalSummary:
      'Computational biologists utilized deep learning structural scaffolds to engineer entirely synthetic luciferases from scratch. These artificial enzymes catalyze luciferin oxidation with quantum yields rivaling natural firefly and Renilla enzymes, without requiring native chaperones.',
    whyItMatters:
      'Synthetic luciferases remove the evolutionary constraints of natural enzymes, allowing tailored thermal stability and substrate selectivity for multi-color in vivo cellular imaging and rapid point-of-care viral diagnostics.',
    isFeatured: true,
    imageUrl: '/src/assets/images/lab_genomics_pipette_1794109451729.jpg',
    readTime: '4 min read',
    isPublished: true,
  },
  {
    id: 'ext-02',
    title: 'Single-Cell CRISPR Perturb-Seq Maps Epigenetic Remodeling in T-Cell Exhaustion',
    publisher: 'Cell',
    originalUrl: 'https://www.cell.com/cell/fulltext/S0092-8674(24)00112-9',
    publicationDate: 'April 02, 2026',
    category: 'Immunology',
    originalSummary:
      'Researchers combined multiplexed CRISPR perturbations with high-throughput single-cell RNA sequencing to dissect over 2,000 regulatory nodes involved in tumor-infiltrating lymphocyte exhaustion.',
    whyItMatters:
      'Identifying the master transcription factors responsible for T-cell exhaustion enables the rational design of next-generation CAR-T cell immunotherapies that resist immunosuppressive microenvironments in solid tumors.',
    isFeatured: true,
    imageUrl: '/src/assets/images/biochem_crispr_cell_1794083576032.jpg',
    readTime: '6 min read',
    isPublished: true,
  },
  {
    id: 'ext-03',
    title: 'Engineering Thermophilic Microorganisms for Continuous Atmospheric Carbon Capture',
    publisher: 'Nature Biotechnology',
    originalUrl: 'https://www.nature.com/nbt/articles/s41587-024-02201-z',
    publicationDate: 'March 28, 2026',
    category: 'Microbiology',
    originalSummary:
      'A team from the Max Planck Institute engineered a thermophilic bacterium (Geobacillus stearothermophilus) with an artificial Calvin-Benson-Bassham bypass pathway that operates at 65°C, capturing gaseous CO2 directly from industrial flues.',
    whyItMatters:
      'High-temperature bioprocesses eliminate contamination risks and cooling overhead, paving the way for economically viable industrial bio-manufacturing of biodegradable precursors directly from factory emissions.',
    isFeatured: false,
    imageUrl: '/src/assets/images/bioreactor_fermentation_pilot_1794109451118.jpg',
    readTime: '5 min read',
    isPublished: true,
  },
  {
    id: 'ext-04',
    title: 'Structural Basis of Allosteric Regulation in Human Phosphofructokinase-1',
    publisher: 'Science',
    originalUrl: 'https://www.science.org/doi/10.1126/science.abq8211',
    publicationDate: 'February 18, 2026',
    category: 'Biochemistry',
    originalSummary:
      'Cryo-electron microscopy resolves the full conformational landscape of tetrameric human PFK-1 bound to AMP and fructose-2,6-bisphosphate, revealing a previously uncharacterized asymmetric transition state.',
    whyItMatters:
      'PFK-1 is the primary commitment pacemaker of glycolysis. Uncovering this cryptic allosteric pocket creates opportunities for selectively throttling Warburg-effect hyper-glycolysis in aggressive oncology profiles.',
    isFeatured: false,
    readTime: '5 min read',
    isPublished: true,
  },
  {
    id: 'ext-05',
    title: 'AlphaFold-Multimer Guided Discovery of Non-Antibiotic Antimicrobial Peptides',
    publisher: 'PNAS',
    originalUrl: 'https://www.pnas.org/doi/10.1073/pnas.2319084121',
    publicationDate: 'January 25, 2026',
    category: 'Bioinformatics',
    originalSummary:
      'Using deep learning models for peptide-membrane docking, investigators computationally screened 500,000 marine metagenomic fragments to discover four potent cyclic peptides that disrupt Gram-negative outer membranes without human cytotoxicity.',
    whyItMatters:
      'With antimicrobial resistance threatening global health, algorithmic de novo antibiotic discovery dramatically compresses the timeline from marine sample to lead candidate from years down to weeks.',
    isFeatured: false,
    readTime: '4 min read',
    isPublished: true,
  },
  {
    id: 'ext-06',
    title: 'Lipid Nanoparticle Tropism Reprogramming for Targeted Hepatic and Pulmonary Gene Delivery',
    publisher: 'ACS Nano',
    originalUrl: 'https://pubs.acs.org/doi/10.1021/acsnano.3c08912',
    publicationDate: 'April 11, 2026',
    category: 'Nanobiotechnology',
    originalSummary:
      'Modulating the molar percentage of ionizable lipids alongside branched PEG-lipid conjugates altered serum protein corona adsorption, shifting mRNA biodistribution from liver reticuloendothelial cells exclusively to bronchial epithelial cells.',
    whyItMatters:
      'Targeted non-viral delivery vectors represent the Holy Grail for treating monogenic respiratory conditions such as cystic fibrosis without systemic off-target accumulation.',
    isFeatured: false,
    readTime: '5 min read',
    isPublished: true,
  },
];

export const INITIAL_EDUCATIONAL_POSTS: EducationalPost[] = [
  {
    id: 'edu-01',
    title: 'How Living Organisms Produce Cold Light: The Enzymatic Mechanism of Bioluminescence',
    category: 'Biochemistry',
    weeklyThemeId: 'theme-bioluminescence',
    dayOfWeek: 'Monday',
    scheduleCategory: 'Biochemistry in Daily Life',
    summary:
      'Unlike fluorescence or phosphorescence which require pre-absorbed photons, biological bioluminescence is chemiluminescence catalyzed by specific enzymes with near 90% quantum efficiency.',
    content: `### 1. The Energy Conversion Paradox
In incandescent bulbs, over 90% of electrical energy is dissipated as thermodynamic waste heat. Fireflies, dinoflagellates, and deep-sea anglerfish achieve the opposite: **cold light**. In firefly luciferase, up to 88% of consumed chemical energy is radiated directly as visible photons in the 550–570 nm wavelength window.

### 2. The Two-Step Catalytic Cycle
The canonical luciferin-luciferase reaction proceeds through an ordered bi-substrate adenylation mechanism requiring divalent magnesium (Mg²⁺) and ATP:

1. **Adenylation**: The carboxylic acid tail of D-luciferin attacks the α-phosphate of ATP, producing enzyme-bound **luciferyl-adenylate** (Luc-AMP) and inorganic pyrophosphate (PPi).
2. **Oxidative Decarboxylation**: Molecular oxygen (O₂) attacks the activated C4 position, forming a strained, high-energy **dioxetanone intermediate**.
3. **Decarboxylation & Photon Release**: Thermal cleavage of CO₂ yields electronically excited **oxyluciferin** in a singlet state. As this intermediate relaxes to ground state, a photon of light (λ ≈ 560 nm) is emitted.

### 3. Structural Active Site Dynamics
Residues His245 and Thr343 stabilize the enolate form of oxyluciferin. Variations in dielectric polarization within the enzyme pocket determine whether the emitted light is yellow-green (polar) or red-shifted (hydrophobic/acidic conditions).

### 4. Why This Matters Outside Nature
Bioluminescence serves as our sharpest biological probe because living mammalian tissues produce zero background luminescence. Unlike GFP which requires exciting laser light (causing autofluorescence and phototoxicity), luciferase produces pure signal against absolute darkness.`,
    equations: [
      '\\text{D-Luciferin} + \\text{ATP} + \\text{Mg}^{2+} \\xrightarrow{\\text{Luciferase}} \\text{Luciferyl-AMP} + \\text{PP}_i',
      '\\text{Luciferyl-AMP} + \\text{O}_2 \\rightarrow \\text{Oxyluciferin}^* + \\text{AMP} + \\text{CO}_2 + h\\nu\\,(\\lambda = 560\\,\\text{nm})',
    ],
    keyTakeaways: [
      'Bioluminescence is self-generated light from chemical bonds, requiring no external light excitation.',
      'Firefly luciferase requires Mg²⁺, ATP, and O₂ to yield oxyluciferin and emitted light.',
      'Near-zero background luminescence makes it an ultra-sensitive molecular sensor in biochemistry.',
    ],
    references: [
      {
        citation:
          'Gould, S. J., & Subramani, S. (1988). Firefly luciferase as a tool in molecular biology. Analytical Biochemistry, 175(1), 5-13.',
      },
      {
        citation:
          'Branchini, B. R., et al. (2015). Luciferase bioluminescence: Chemistry and molecular evolution. Photochemistry and Photobiology, 91(4), 850-863.',
      },
    ],
    imageUrl: '/src/assets/images/lab_genomics_pipette_1794109451729.jpg',
    publicationDate: 'May 04, 2026',
    readTimeEstimate: '5 min read',
    isPublished: true,
  },
  {
    id: 'edu-02',
    title: 'Applications of Luciferase in Modern Biotechnology: ATP Sensing, Pathogen Detection & In Vivo Tracking',
    category: 'Biotechnology',
    weeklyThemeId: 'theme-bioluminescence',
    dayOfWeek: 'Tuesday',
    scheduleCategory: 'Biotechnology Around Us',
    summary:
      'From hygiene validation in sterile pharmaceuticals to real-time bioluminescence resonance energy transfer (BRET) for drug screening.',
    content: `### 1. The Cellular ATP Barometer
Because the luciferin-luciferase reaction rate is stoichiometrically dependent on free intracellular adenosine triphosphate (ATP), the intensity of luminescence is directly proportional to viable cell numbers:

- **Sterility Monitoring**: Pharmaceutical manufacturing lines and food packaging plants use rapid swab-based ATP assays to detect microbial contamination in under 30 seconds.
- **Cytotoxicity Assays**: High-throughput drug screening formats (e.g. CellTiter-Glo) quantify cancer cell viability post-chemotherapy by measuring ATP leakage.

### 2. Dual-Reporter Assays in Genetic Regulation
By coupling Firefly luciferase (emitting at 560 nm) and *Renilla* or NanoLuc luciferase (emitting at 460 nm from coelenterazine), researchers can measure promoter activation and normalize for transfection efficiency in a single well.

### 3. Bioluminescence Resonance Energy Transfer (BRET)
When an engineered luciferase is genetically fused to a donor protein and a fluorescent protein (like GFP or Venus) is fused to an acceptor, protein-protein interactions bring them within Förster distance (<10 nm). Non-radiative energy transfer occurs, shifting emission and capturing real-time receptor signaling in living cells.`,
    equations: [
      'I_{\\text{lum}} \\propto [\\text{ATP}]_{\\text{viable}}',
      'E_{\\text{FRET/BRET}} = \\frac{R_0^6}{R_0^6 + r^6}',
    ],
    keyTakeaways: [
      'Luciferase provides instantaneous quantitative measurements of picomolar ATP concentrations.',
      'NanoLuc and BRET allow real-time visualization of GPCR dimerization in pharmaceutical discovery.',
      'Non-invasive in vivo imaging tracks metastatic tumor shrinkage inside living models.',
    ],
    references: [
      {
        citation:
          'Hall, M. P., et al. (2012). Engineered bioluminescent reporter from deep-sea shrimp. ACS Chemical Biology, 7(11), 1848-1857.',
      },
    ],
    imageUrl: '/src/assets/images/bioreactor_fermentation_pilot_1794109451118.jpg',
    publicationDate: 'May 05, 2026',
    readTimeEstimate: '6 min read',
    isPublished: true,
  },
  {
    id: 'edu-03',
    title: 'New & Ongoing Research: Engineered Marine Luciferases with Enhanced Thermal Stability',
    category: 'Molecular Biology',
    weeklyThemeId: 'theme-bioluminescence',
    dayOfWeek: 'Wednesday',
    scheduleCategory: 'New & Ongoing Research',
    summary:
      'Recent molecular evolution efforts have stabilized deep-sea Oplophorus gracilirostris luciferase derivatives to withstand 70°C incubation for rugged field deployment.',
    content: `### 1. Overcoming the Thermal Fragility Barrier
Wild-type luciferases denature rapidly above 37°C, limiting their use in point-of-care microfluidics and tropical field testing. A collaborative team at RIKEN and Cambridge used consensus sequence mutagenesis to engineer disulfide bonds across flexible catalytic loops.

### 2. Experimental Verification
The resulting engineered variant retained >85% emission activity after 2 hours at 65°C and demonstrated resistance to 4M urea. Crystal structures revealed that hydrophobic packing around the catalytic triad prevented solvent quenching.`,
    equations: [
      '\\Delta G_{\\text{unfolding}}^{\\circ} = \\Delta H^{\\circ} - T\\Delta S^{\\circ} > 0\\;(\\text{stabilized})',
    ],
    keyTakeaways: [
      'Thermal stabilization enables diagnostic enzyme stockpiling without strict cold-chain logistics.',
      'Consensus engineering rigidified the protein core while maintaining flexible substrate entry.',
    ],
    references: [
      {
        citation:
          'Dixon, A. S., et al. (2016). NanoLuc complementation reporter for protein interaction studies. ACS Chemical Biology, 11(2), 400-408.',
      },
    ],
    publicationDate: 'May 06, 2026',
    readTimeEstimate: '4 min read',
    isPublished: true,
  },
];

export const INITIAL_WEEKLY_THEMES: WeeklyTheme[] = [
  {
    id: 'theme-bioluminescence',
    title: 'The Science of Bioluminescence',
    weekNumber: 18,
    year: 2026,
    startDate: 'May 04, 2026',
    endDate: 'May 10, 2026',
    introduction:
      'Explore the fascinating world of biological light production—from the fundamental organic chemistry of luciferin-luciferase reactions to medical diagnostic biosensors, deep-sea ecology, and synthetic biology.',
    episodes: [
      {
        day: 'Monday',
        scheduleCategory: 'Biochemistry in Daily Life',
        title: 'How Living Organisms Produce Light: Enzymatic Mechanisms & Cold Photons',
        summary:
          'The organic chemistry behind cold light, the high-energy dioxetanone intermediate, and why nature avoids heat waste.',
        isPublished: true,
        postId: 'edu-01',
      },
      {
        day: 'Tuesday',
        scheduleCategory: 'Biotechnology Around Us',
        title: 'Applications of Luciferase: ATP Sensing & Industrial Sterility',
        summary:
          'How food inspection, oncology drug screening, and cleanrooms leverage bioluminescence to quantify living microbes.',
        isPublished: true,
        postId: 'edu-02',
      },
      {
        day: 'Wednesday',
        scheduleCategory: 'New & Ongoing Research',
        title: 'Thermally Stable Marine Luciferases for Cold-Chain-Free Diagnostics',
        summary:
          'Engineered protein variants that function at 65°C, expanding point-of-care diagnostics in developing regions.',
        isPublished: true,
        postId: 'edu-03',
      },
      {
        day: 'Thursday',
        scheduleCategory: 'Research Ideas & Opportunities',
        title: 'Proposed Research Idea: Autonomous Bioluminescent Biosensor for Microplastic Leaching',
        summary:
          'Hypothesis: Genetically fusing luciferase to phthalate-sensing bacterial riboswitches produces optical warnings for degraded plastic particles.',
        isPublished: true,
      },
      {
        day: 'Friday',
        scheduleCategory: 'Future Technologies',
        title: 'Future Technologies: Self-Illuminating Urban Flora & Zero-Electricity Lighting',
        summary:
          'Synthetic plant biology inserting the fungal caffeic acid bioluminescence cycle into angiosperm trees.',
        isPublished: true,
      },
      {
        day: 'Saturday',
        scheduleCategory: 'Research & Data Skills',
        title: 'Research Skills: In Silico Sequence Alignment of Luciferin-Binding Pockets with PyMOL & BLAST',
        summary:
          'A step-by-step practical guide to analyzing conservation patterns across beetle and marine coelenterate luciferases.',
        isPublished: true,
      },
      {
        day: 'Sunday',
        scheduleCategory: 'Grand Sunday / Weekly Recap',
        title: 'Grand Sunday: Bioluminescence Master Synthesis & Weekly Knowledge Challenge',
        summary:
          'Synthesize all six days, review core biochemical equations, and test your knowledge in the Grand Sunday Quiz.',
        isPublished: true,
      },
    ],
    keyTakeaways: [
      'Chemiluminescence converts chemical bond energy into photons with minimal heat dissipation.',
      'Luciferin requires ATP, Mg²⁺, and O₂ to generate the unstable dioxetanone intermediate.',
      'Modern molecular biology utilizes multi-spectral luciferases for real-time cellular imaging.',
      'Synthetic biology aims to introduce the caffeic acid cycle into crops and urban landscaping.',
    ],
    relatedQuizId: 'quiz-grand-sunday-01',
    status: 'current',
  },
  {
    id: 'theme-crispr-epigenetics',
    title: 'CRISPR & Precision Epigenome Editing',
    weekNumber: 17,
    year: 2026,
    startDate: 'April 27, 2026',
    endDate: 'May 03, 2026',
    introduction:
      'Beyond double-stranded DNA breaks: Catalytically dead Cas9 (dCas9) fused with methyltransferases, histone deacetylases, and base editors to modulate gene expression without altering genomic sequences.',
    episodes: [
      {
        day: 'Monday',
        scheduleCategory: 'Biochemistry in Daily Life',
        title: 'Epigenetics 101: How Environmental Signals Modify Chromatin Architecture',
        summary:
          'DNA methylation and histone acetylation as reversible switches controlling cellular identity.',
        isPublished: true,
      },
      {
        day: 'Tuesday',
        scheduleCategory: 'Biotechnology Around Us',
        title: 'The Anatomy of dCas9: Turning Molecular Scissors into Targeted Regulators',
        summary:
          'Inactivating HNH and RuvC endonuclease domains creates an RNA-guided sequence locator.',
        isPublished: true,
      },
      {
        day: 'Wednesday',
        scheduleCategory: 'New & Ongoing Research',
        title: 'Reversible Silencing of Pro-Inflammatory Cytokines in Autoimmune Arthritis',
        summary:
          'Preclinical models show targeted CpG island methylation quiets aberrant TNF-alpha expression.',
        isPublished: true,
      },
      {
        day: 'Thursday',
        scheduleCategory: 'Research Ideas & Opportunities',
        title: 'Proposed Idea: Multiplexed Epigenetic Erasers to Overcome Chemotherapy Resistance',
        summary:
          'Hypothesis: Simultaneous targeted demethylation of promoter hypermethylated tumor suppressors re-sensitizes glioblastoma to temozolomide.',
        isPublished: true,
      },
      {
        day: 'Friday',
        scheduleCategory: 'Future Technologies',
        title: 'Epigenetic Rejuvenation & Programmable Cellular Longevity',
        summary:
          'Pulsed Yamanaka factor transcription via epigenetic CRISPR without risking teratoma formation.',
        isPublished: true,
      },
      {
        day: 'Saturday',
        scheduleCategory: 'Research & Data Skills',
        title: 'Off-Target Verification with GUIDE-seq and Deep Epigenomic Profiling',
        summary:
          'Essential computational pipelines for quantifying guide RNA specificity and chromatin accessibility.',
        isPublished: true,
      },
      {
        day: 'Sunday',
        scheduleCategory: 'Grand Sunday / Weekly Recap',
        title: 'Grand Sunday Recap: The Precision Epigenome Master Class',
        summary:
          'Comprehensive summary of epigenomic modulation strategies and Sunday assessment.',
        isPublished: true,
      },
    ],
    keyTakeaways: [
      'dCas9 preserves chromosomal integrity by preventing double-strand breaks.',
      'Targeted methylation offers potential for durable therapeutic silencing.',
      'Guide RNA specificity remains paramount to avoid off-target chromatin remodeling.',
    ],
    relatedQuizId: 'quiz-topic-genetics-01',
    status: 'archived',
  },
];

export const INITIAL_QUIZZES: Quiz[] = [
  {
    id: 'quiz-daily-today',
    title: 'Daily Science Challenge: Bioluminescence & Cofactors',
    topic: 'Biochemistry',
    quizType: 'daily',
    difficulty: 'Intermediate',
    publicationDate: 'May 07, 2026',
    isPublished: true,
    questions: [
      {
        id: 'q-daily-1',
        questionText:
          'In the firefly luciferase reaction, which divalent cation is strictly required to coordinate ATP before the adenylation of D-luciferin can proceed?',
        options: ['Calcium (Ca²⁺)', 'Magnesium (Mg²⁺)', 'Zinc (Zn²⁺)', 'Copper (Cu²⁺)'],
        correctOptionIndex: 1,
        explanation:
          'Magnesium (Mg²⁺) coordinates the triphosphate moiety of ATP, neutralizing negative charge and properly orienting the α-phosphate for nucleophilic attack by the carboxyl group of D-luciferin.',
        category: 'Biochemistry',
      },
    ],
  },
  {
    id: 'quiz-grand-sunday-01',
    title: 'Grand Sunday Quiz: The Science of Bioluminescence',
    topic: 'Multi-disciplinary',
    quizType: 'grand_sunday',
    difficulty: 'Advanced',
    weeklyThemeId: 'theme-bioluminescence',
    publicationDate: 'May 10, 2026',
    isPublished: true,
    questions: [
      {
        id: 'gs-q1',
        questionText:
          'What is the key physical distinction between biological bioluminescence and fluorescence (such as Green Fluorescent Protein)?',
        options: [
          'Fluorescence requires ATP hydrolysis, whereas bioluminescence requires GTP.',
          'Bioluminescence produces light via an enzymatically catalyzed chemical reaction without prior photon excitation, while fluorescence requires absorbing excitation light.',
          'Fluorescence only occurs in mammals, while bioluminescence is restricted to insects.',
          'Bioluminescence emits radiation strictly in the infrared spectrum.',
        ],
        correctOptionIndex: 1,
        explanation:
          'Bioluminescence is chemiluminescence occurring within an organism where chemical bond energy generates electronically excited oxyluciferin. Fluorescence requires continuous external illumination to excite fluorophore electrons.',
        category: 'Biochemistry',
      },
      {
        id: 'gs-q2',
        questionText:
          'Which high-energy intermediate forms when molecular oxygen oxidizes luciferyl-AMP during the firefly reaction?',
        options: [
          'A four-membered dioxetanone ring',
          'A stable cyclic phosphodiester',
          'A planar benzene radical',
          'A thioester linked to coenzyme A',
        ],
        correctOptionIndex: 0,
        explanation:
          'The attack of O₂ leads to cyclization into a high-energy, strained four-membered 1,2-dioxetanone ring. Spontaneous thermal decarboxylation releases CO₂ and leaves oxyluciferin in an electronically excited state.',
        category: 'Biochemistry',
      },
      {
        id: 'gs-q3',
        questionText:
          'Why are luciferase-based ATP assays widely employed to detect bacterial contamination in industrial cleanrooms?',
        options: [
          'Dead bacterial cells synthesize 100 times more ATP than live ones.',
          'The intensity of generated light is stoichiometrically proportional to intracellular ATP, reflecting live metabolic activity in seconds.',
          'Luciferase chemically binds to bacterial peptidoglycan walls directly.',
          'It replaces the need for any water or sterile buffers.',
        ],
        correctOptionIndex: 1,
        explanation:
          'Because all living cells maintain a tight pool of ATP that degrades within seconds of cell death, light emission from luciferin-luciferase directly mirrors viable microbial presence.',
        category: 'Biotechnology',
      },
      {
        id: 'gs-q4',
        questionText:
          'What synthetic biology pathway was recently engineered from fungi into plants to create continuously self-illuminating flora without external substrate application?',
        options: [
          'The shikimate-tryptophan conversion pathway',
          'The caffeic acid cycle',
          'The bacterial nitrogenase cluster',
          'The chlorophyll degradation cascade',
        ],
        correctOptionIndex: 1,
        explanation:
          'The fungal bioluminescent pathway utilizes caffeic acid (a metabolite ubiquitous in plant lignin biosynthesis) and recycles hispidin into fungal luciferin, allowing continuous luminescence inside living plants without chemical spraying.',
        category: 'Biotechnology',
      },
      {
        id: 'gs-q5',
        questionText:
          'In Bioluminescence Resonance Energy Transfer (BRET), what governs the efficiency of non-radiative energy transfer between luciferase and the fluorophore acceptor?',
        options: [
          'Ambient temperature alone regardless of distance',
          'Inverse sixth power of distance between donor and acceptor (1/r⁶, typically < 10 nm)',
          'The magnetic field of the laboratory incubator',
          'The total volume of the liquid buffer',
        ],
        correctOptionIndex: 1,
        explanation:
          'BRET follows Förster resonance energy transfer principles where efficiency scales as 1/(1 + (r/R₀)⁶). This makes it an exquisite nanometer-scale ruler for monitoring protein-protein interactions in living cells.',
        category: 'Molecular Biology',
      },
    ],
  },
  {
    id: 'quiz-topic-biochem-01',
    title: 'Biochemistry Challenge: Enzyme Kinetics & Allostery',
    topic: 'Biochemistry',
    quizType: 'topic_based',
    difficulty: 'Intermediate',
    publicationDate: 'April 20, 2026',
    isPublished: true,
    questions: [
      {
        id: 'tb-bc-1',
        questionText:
          'In classic Michaelis-Menten kinetics, what does the constant Km represent physiologically?',
        options: [
          'The maximum velocity divided by substrate concentration',
          'The substrate concentration at which reaction rate reaches half of Vmax',
          'The rate constant of product dissociation alone',
          'The total enzyme concentration in solution',
        ],
        correctOptionIndex: 1,
        explanation:
          'Km is the substrate concentration at which the enzymatic reaction velocity is exactly half of its theoretical maximum (Vmax/2), reflecting apparent affinity.',
        category: 'Biochemistry',
      },
      {
        id: 'tb-bc-2',
        questionText:
          'How does a competitive inhibitor affect an enzyme’s apparent Km and Vmax in a Lineweaver-Burk plot?',
        options: [
          'Km increases (shifted to right) while Vmax remains unchanged',
          'Both Km and Vmax decrease proportionally',
          'Vmax decreases while Km remains unchanged',
          'Km decreases and Vmax increases',
        ],
        correctOptionIndex: 0,
        explanation:
          'Competitive inhibitors bind reversibly to the active site, increasing the amount of substrate needed to reach half-maximal velocity (higher apparent Km), but high substrate concentrations can still saturate the enzyme to achieve normal Vmax.',
        category: 'Biochemistry',
      },
    ],
  },
  {
    id: 'quiz-topic-genetics-01',
    title: 'Genetics Challenge: CRISPR, Repair Pathways & Precision Editing',
    topic: 'Genetics',
    quizType: 'topic_based',
    difficulty: 'Intermediate',
    publicationDate: 'April 22, 2026',
    isPublished: true,
    questions: [
      {
        id: 'tb-gen-1',
        questionText:
          'What is the primary cellular DNA repair pathway that causes unpredictable insertion/deletion (indel) mutations following a double-strand break created by standard Cas9?',
        options: [
          'Homology-Directed Repair (HDR)',
          'Non-Homologous End Joining (NHEJ)',
          'Nucleotide Excision Repair (NER)',
          'Base Excision Repair (BER)',
        ],
        correctOptionIndex: 1,
        explanation:
          'Non-Homologous End Joining (NHEJ) directly ligates blunt DNA ends without a homologous template, frequently introducing frameshift indels that knock out gene function.',
        category: 'Genetics',
      },
    ],
  },
];

export const INITIAL_RESEARCH_ITEMS: ResearchItem[] = [
  {
    id: 'res-01',
    title: 'Structural Elucidation of Cas12a2: The RNA-Triggered Collateral DNA Shredder',
    type: 'ongoing',
    category: 'Molecular Biology',
    summary:
      'Unlike Cas9, Cas12a2 undergoes massive conformational reorganization upon target RNA binding, activating a non-specific collateral cleavage site that degrades single-stranded DNA and RNA, inducing abortive bacterial suicide.',
    background:
      'Discovered in bacterial CRISPR defense systems, Cas12a2 prevents viral bacteriophage propagation by triggering programmed cellular death before viral replication finishes.',
    verifiedDiscovery: true,
    references: [
      'Bravo, J. P., et al. (2023). RNA-triggered protein conformational changes facilitate non-specific nucleic acid degradation by Cas12a2. Nature, 614, 168-174.',
    ],
    sourceUrl: 'https://www.nature.com/articles/s41586-022-05560-w',
    publicationDate: 'April 14, 2026',
    isPublished: true,
  },
  {
    id: 'res-02',
    title: 'Directed Evolution of PETase Variants for Complete Enzymatic Plastic Depolymerization at Ambient Temperatures',
    type: 'ongoing',
    category: 'Biotechnology',
    summary:
      'Engineered leaf-branch compost cutinase (LCC) and IsPETase variants achieve 90% crystalline polyethylene terephthalate depolymerization into terephthalic acid and ethylene glycol within 10 hours at 50°C.',
    background:
      'Plastic pollution accumulates worldwide. Biological recycling allows closed-loop polymerization without downcycling quality degradation.',
    verifiedDiscovery: true,
    references: [
      'Tournier, V., et al. (2020). An engineered PET depolymerase to break down and recycle plastic bottles. Nature, 580, 216-219.',
    ],
    sourceUrl: 'https://www.nature.com/articles/s41586-020-2149-4',
    publicationDate: 'March 19, 2026',
    isPublished: true,
  },
  {
    id: 'res-idea-01',
    title: 'Engineered Bacterial Riboswitch Biosensors for Real-Time Optical Detection of Nanoplastic Leaching in Water Supplies',
    type: 'proposed_idea',
    category: 'Nanobiotechnology',
    summary:
      'A proposed synthetic biology framework utilizing aptamer-regulated NanoLuc expression in non-pathogenic Bacillus subtilis to visually detect nanometer-scale polystyrene particles.',
    background:
      'Nanoplastics (<100 nm) penetrate mammalian gut barriers and cellular membranes, yet current detection methods require high-cost FTIR or Raman spectroscopy unavailable in field settings.',
    researchQuestion:
      'Can an artificially evolved RNA aptamer sensitive to surface hydrophobic signatures of weathered nanopolystyrene be coupled to a split-luciferase reporter to produce measurable bioluminescent output without laboratory equipment?',
    hypothesis:
      'Fusing an anti-polystyrene RNA aptamer to the 5\' UTR of a split-NanoLuc construct will induce translation of the active luciferase complex only in the presence of suspended nanoplastics at concentrations >10 parts per billion.',
    suggestedMethodology:
      '1. Perform SELEX to generate high-affinity single-stranded RNA aptamers against weathered polystyrene beads.\n2. Engineer an engineered riboswitch chassis into Bacillus subtilis WB800.\n3. Validate luminescence responsiveness across varying pH (5.5–8.5) and organic matter confounders.',
    limitations:
      'Natural organic matter (such as humic acids) may non-specifically foul hydrophobic aptamer loops, causing false-positive signals; require calibration against diverse polymer blends.',
    references: [
      'Limitation note: This is a proposed research concept formulated for academic discussion, student thesis inspiration, and independent research exploration. It has not undergone clinical or in vivo validation.',
    ],
    verifiedDiscovery: false,
    publicationDate: 'May 07, 2026',
    isPublished: true,
  },
  {
    id: 'res-idea-02',
    title: 'Metabolically Decoupled Cyanobacteria for Direct Electromicrobial Synthesis of Biobutanol',
    type: 'proposed_idea',
    category: 'Biochemistry',
    summary:
      'A proposed metabolic engineering scheme splitting carbon fixation from vegetative growth to channel 80% of absorbed solar energy directly into solvent production.',
    background:
      'Wild-type photosynthetic microorganisms partition most fixed carbon into biomass, limiting fuel yield per hectare of photobioreactor footprint.',
    researchQuestion:
      'Does inducible synthetic degradation of essential ribosomal proteins during stationary phase redirect acetyl-CoA pools toward the engineered Clostridial CoA-dependent butanol pathway?',
    hypothesis:
      'Equipping cyanobacterial ribosomes with temperature-sensitive degron tags will halt competitive biomass division, shifting flux entirely toward 1-butanol synthesis.',
    suggestedMethodology:
      'Design SsrA-tagged ribosomal subunits under a heat-inducible cI857/pR promoter and measure 1-butanol titers via gas chromatography-mass spectrometry (GC-MS).',
    limitations:
      'Cessation of protein turnover limits photosynthetic photosystem II repair, potentially causing rapid photoinhibition under intense sunlight.',
    references: [
      'Proposed research hypothesis designed for bioengineering exploration. Not experimentally verified.',
    ],
    verifiedDiscovery: false,
    publicationDate: 'May 01, 2026',
    isPublished: true,
  },
  {
    id: 'res-future-01',
    title: 'Synthetic Chloroplasts & Artificial Minimal Cells for Carbon-Negative Space Stations',
    type: 'future_tech',
    category: 'Biotechnology',
    summary:
      'Microfluidic droplet encapsulation of thylakoid membranes paired with 16-enzyme CETCH cycles to generate autonomous light-driven carbohydrate synthesizers without living organisms.',
    background:
      'Deep space exploration demands closed-loop life support systems with zero biological mutation risk and maximum volumetric carbon-fixing efficiency.',
    verifiedDiscovery: true,
    references: [
      'Miller, T. E., et al. (2020). Light-powered CO2 fixation in a chloroplast mimic with natural and synthetic parts. Science, 368, 649-654.',
    ],
    sourceUrl: 'https://www.science.org/doi/10.1126/science.aaz5044',
    publicationDate: 'April 18, 2026',
    isPublished: true,
  },
];
