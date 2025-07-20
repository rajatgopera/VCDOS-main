
# Vendor Cab and Driver Onboarding System

A comprehensive multi-level vendor management system for fleet operations, vehicle onboarding, and driver management with hierarchical access control.

## 🌐 Live Demo

Visit the live application at: [https://pj-develop.github.io/VCDOS/](https://pj-develop.github.io/VCDOS/)

### Demo Credentials

Access different admin levels using these credentials:

- **Super Admin**: super@vendor.com
- **Regional Admin**: north@vendor.com
- **City Admin**: citya@vendor.com
- **Local Admin**: local@vendor.com

Password: Any 6+ characters


## 🚀 Features

### 1. Multi-Level Vendor Hierarchy
- Flexible N-level vendor hierarchy (Super → Regional → City → Local)
- Role-based access management
- Parent-child relationship management
- Customizable permissions per vendor level

### 2. Super Vendor Dashboard
- Complete vendor network overview
- Real-time fleet status monitoring
- Document verification management
- Performance analytics and reporting

### 3. Vehicle Management
- Vehicle onboarding and registration
- Document tracking and verification
- Compliance monitoring
- Vehicle status management (active/inactive)

### 4. Driver Management
- Driver onboarding and verification
- Document upload and tracking
- Vehicle assignment
- Performance monitoring

### 5. Access Control
- Granular permission management
- Role-based access control
- Delegation capabilities
- Activity audit trails

## 🛠 Technology Stack

- **Frontend**: React.js with TypeScript
- **State Management**: Zustand
- **UI Components**: Tailwind CSS, Lucide Icons
- **Charts**: Recharts
- **Forms**: React Hook Form
- **Routing**: React Router v6
- **Type Checking**: TypeScript

## 📦 Installation

1. Clone the repository:

git clone https://github.com/Pj-develop/VCDOS.git

2. Install dependencies:
```bash
cd VCDOS
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🏗 Project Structure

```
src/
├── components/          # Reusable UI components
├── contexts/           # React contexts
├── pages/              # Page components
├── stores/            # Zustand stores
├── types/             # TypeScript types
└── utils/             # Utility functions
```

## 🔑 Key Components

### 1. Vendor Hierarchy Tree
- Interactive organizational chart
- Drag-and-drop functionality
- Visual hierarchy representation
- Quick actions menu

### 2. Dashboard Views
- Super Vendor Dashboard
- Regional Dashboard
- City Dashboard
- Local Dashboard

### 3. Management Interfaces
- Vehicle Management
- Driver Management
- Document Verification
- User Management

## 💡 Implementation Details

### State Management
- Zustand for global state management
- Context API for auth state
- Local state for UI components

### Performance Optimization
- Lazy loading of components
- Memoization of expensive calculations
- Efficient re-rendering strategies

### Error Handling
- Comprehensive error boundaries
- Graceful error messages
- Form validation
- API error handling

## 🔒 Security Features

- Role-based access control
- Secure authentication flow
- Protected routes
- Data validation

## 📈 Scalability Considerations

- Modular architecture
- Efficient data structures
- Optimized rendering
- Lazy loading strategies

## 🧪 Building

```bash
# Run build command
npm run build


```





