
    // TypeScript code for the toggle functionality
    document.querySelector('.toggle')?.addEventListener('click', () => {
      const experienceSection = document.querySelector('.skills') as HTMLElement;
      
      // Check if the section is currently hidden or shown and toggle accordingly
      if (experienceSection.style.display === 'none') {
        experienceSection.style.display = 'block';  // Show the section
      } else {
        experienceSection.style.display = 'none';  // Hide the section
      }
    });