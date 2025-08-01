interface GitHubProject {
  title: string;
  description: string | null;
  tags: string[];
  link: string;
  updated: string;
}

export async function getGitHubProjects(username: string): Promise<GitHubProject[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
    if (!response.ok) throw new Error('Error fetching GitHub projects');
    
    const repos = await response.json();
    return repos
      .filter((repo: any) => !repo.fork) // Excluir forks
      .map((repo: any) => ({
        title: repo.name,
        description: repo.description || 'Sin descripción',
        tags: repo.topics || [],
        link: repo.html_url,
        updated: repo.updated_at
      }));
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return [];
  }
}