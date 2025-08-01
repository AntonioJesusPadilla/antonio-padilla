export async function getGitHubProjects(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) throw new Error('Error fetching GitHub projects');
    
    const repos = await response.json();
    return repos.map(repo => ({
      title: repo.name,
      description: repo.description,
      tags: repo.topics || [],
      link: repo.html_url,
      updated: repo.updated_at
    }));
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}