export const en = {
  common: {
    appName: "Creator Lab",
    signIn: "Sign In",
    signUp: "Sign Up",
    signOut: "Sign out",
    signingOut: "Signing out...",
    backToWelcome: "Back to welcome",
  },
  header: {
    ariaLabel: "Primary navigation",
    brandSubtitle: "Video pre-production workspace",
    primaryCta: "Sign Up",
    nav: {
      workflow: "Workflow",
      features: "Features",
      overview: "Why it works",
    },
    localeLabel: "Language",
    locales: {
      ru: "RU",
      en: "EN",
    },
    signedInAs: "Signed in as",
  },
  welcome: {
    eyebrow: "Creator Lab",
    title: "Pre-production that feels like part of the creative process, not admin overhead.",
    description:
      "Plan video projects from script to shot list in one workspace built for solo creators and small production teams.",
    whyEyebrow: "Why it matters",
    whyTitle: "A creator workflow usually breaks right when planning becomes detailed.",
    whyDescription:
      "The script lives in one app, references in another, and frame notes disappear across docs and chats. Creator Lab brings those early production decisions into one clear system.",
    flowEyebrow: "Core flow",
    flowTitle: "The product is built around the real path from idea to shoot day.",
    features: [
      {
        title: "Script-first workflow",
        description:
          "Start with the story, then turn it into scenes and a shoot-ready shot plan without scattered notes.",
      },
      {
        title: "Shot planning without chaos",
        description:
          "Collect camera moves, locations, frames, and practical constraints in one place before production starts.",
      },
      {
        title: "References in context",
        description:
          "Keep images, PDFs, and links next to the exact scene or shot they support instead of burying them in folders.",
      },
    ],
    workflow: [
      "Create a project and define the format of the video you are making.",
      "Write the script, break it into scenes, and turn each scene into a shot plan.",
      "Attach visual references and export a clean production brief for the shoot.",
    ],
    panel: {
      projectLabel: "Project",
      projectTitle: "Night street portrait film",
      projectDescription: "Vertical social cut, atmospheric, 45 sec.",
      sceneLabel: "Scene 01",
      sceneTitle: "Arrival",
      sceneDescription: "Cold open, walking shot, city noise underneath.",
      shotListLabel: "Shot list",
      shotListTitle: "12 planned shots",
      shotListDescription: "Wide frame, portrait close-up, handheld inserts.",
      referencesLabel: "References",
      referencesTitle: "8 attached assets",
      referencesDescription: "Lighting, camera movement, and framing ideas.",
      exportLabel: "Export",
      exportTitle: "Shooting brief ready",
      exportDescription: "PDF for prep and on-set work.",
    },
  },
  auth: {
    signIn: {
      eyebrow: "Welcome back",
      title: "Sign in to Creator Lab",
      description: "Use your Google account to access Creator Lab without passwords stored in our app.",
      google: "Continue with Google",
      pending: "Connecting to Google...",
      helper: "Google handles authentication. We only keep the session needed for this app.",
      alternate: "Don't have an account yet?",
      alternateLink: "Create account",
    },
    signUp: {
      eyebrow: "Start your workspace",
      title: "Create your Creator Lab account",
      description: "Start with Google sign-in for now. No password form, no password storage in our database.",
      google: "Continue with Google",
      pending: "Connecting to Google...",
      helper: "Your Google identity becomes your Creator Lab account for this phase of the product.",
      alternate: "Already have an account?",
      alternateLink: "Sign In",
    },
  },
} as const;
