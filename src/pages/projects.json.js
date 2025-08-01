export async function get() {
  const projects = await getGitHubProjects('tu-usuario');
  return {
    body: JSON.stringify(projects)
  };
}