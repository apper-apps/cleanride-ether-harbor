import mockReports from "@/services/mockData/reports.json";

class ReportService {
  constructor() {
    this.reports = [...mockReports];
  }

  async delay(ms = 300) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async getAll() {
    await this.delay();
    return [...this.reports];
  }

  async getById(id) {
    await this.delay();
    const report = this.reports.find(r => r.Id === parseInt(id));
    return report ? { ...report } : null;
  }

  async create(reportData) {
    await this.delay();
    const newReport = {
      Id: Math.max(...this.reports.map(r => r.Id), 0) + 1,
      ...reportData,
      timestamp: new Date().toISOString(),
      status: "submitted"
    };
    
    this.reports.push(newReport);
    return { ...newReport };
  }

  async update(id, updateData) {
    await this.delay();
    const index = this.reports.findIndex(r => r.Id === parseInt(id));
    if (index === -1) return null;
    
    this.reports[index] = { ...this.reports[index], ...updateData };
    return { ...this.reports[index] };
  }

  async delete(id) {
    await this.delay();
    const index = this.reports.findIndex(r => r.Id === parseInt(id));
    if (index === -1) return false;
    
    this.reports.splice(index, 1);
    return true;
  }
}

export default new ReportService();