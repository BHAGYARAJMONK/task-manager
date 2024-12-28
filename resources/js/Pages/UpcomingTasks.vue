<template>
  <div class="container mt-5">
    <h1 class="mb-4 text-center text-primary">Upcoming Tasks</h1>
    <!-- Table Container -->
    <div class="table-responsive">
      <table class="table table-bordered table-hover table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Title</th>
            <th>Priority</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td>{{ task.title }}</td>
            <td>
              <span 
                :class="{
                  'badge': true,
                  'high-priority': task.priority === 'High',
                  'medium-priority': task.priority === 'Medium',
                  'low-priority': task.priority === 'Low'
                }">
                {{ task.priority }}
              </span>
            </td>
            <td>{{ formatDate(task.due_date) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Message if no tasks -->
    <div v-if="tasks.length === 0" class="alert alert-info mt-3 text-center">
      No upcoming tasks.
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      tasks: [], // To store upcoming tasks
    };
  },
  async created() {
    try {
      // Fetch upcoming tasks from the API
      const response = await axios.get('/api/tasks/upcoming');
      this.tasks = response.data;
    } catch (error) {
      console.error('Error fetching upcoming tasks:', error);
      this.tasks = [];
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
    },
  },
};
</script>

<style scoped>
/* Custom styling for the table */
.table th, .table td {
  text-align: center;
}

.table th {
  background-color: #4e73df;
  color: white;
}

.table tbody tr:hover {
  background-color: #f1f1f1;
}

.table td {
  font-size: 16px;
  padding: 12px;
}

h1 {
  font-size: 36px;
  font-weight: bold;
}

/* Custom badge styles */
.badge {
  font-size: 14px;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 12px;
  color: black;
}

/* High priority (red) */
.high-priority {
  background-color: #e74c3c;
  color: white;
}

/* Medium priority (yellow) */
.medium-priority {
  background-color: #f39c12;
  color: white;
}

/* Low priority (green) */
.low-priority {
  background-color: #2ecc71;
  color: white;
}
</style>
