// Main test runner for all component tests
import { runner as buttonRunner } from './components/button/button.integration.test.js';
import { runner as cardRunner } from './components/card/card.integration.test.js';

class MainTestRunner {
  async runAll() {
    console.log('🚀 Starting Maxzilla UI Component Test Suite');
    console.log('=' .repeat(50));
    
    const runners = [
      { name: 'Button', runner: buttonRunner },
      { name: 'Card', runner: cardRunner }
    ];
    
    let totalPassed = 0;
    let totalFailed = 0;
    const failedSuites: string[] = [];
    
    for (const { name, runner } of runners) {
      try {
        console.log(`\n📦 Testing ${name} Component`);
        console.log('-'.repeat(30));
        
        const initialLog = console.log;
        let suiteOutput = '';
        
        // Capture output for counting
        console.log = (...args) => {
          const line = args.join(' ');
          suiteOutput += line + '\n';
          initialLog(...args);
        };
        
        await runner.run();
        
        console.log = initialLog;
        
        // Count results from output
        const passedMatches = suiteOutput.match(/✅/g);
        const failedMatches = suiteOutput.match(/❌/g);
        
        const suitePassed = passedMatches ? passedMatches.length : 0;
        const suiteFailed = failedMatches ? failedMatches.length : 0;
        
        totalPassed += suitePassed;
        totalFailed += suiteFailed;
        
      } catch (error) {
        console.error(`💥 ${name} test suite failed:`, error);
        failedSuites.push(name);
        totalFailed++;
      }
    }
    
    console.log('\n' + '='.repeat(50));
    console.log('🏁 Final Results');
    console.log('='.repeat(50));
    console.log(`✅ Total Passed: ${totalPassed}`);
    console.log(`❌ Total Failed: ${totalFailed}`);
    
    if (failedSuites.length > 0) {
      console.log(`💥 Failed Suites: ${failedSuites.join(', ')}`);
    }
    
    if (totalFailed > 0) {
      console.log('🔴 Some tests failed!');
      throw new Error(`${totalFailed} tests failed across ${failedSuites.length} suites`);
    } else {
      console.log('🟢 All tests passed!');
    }
  }
}

export const mainRunner = new MainTestRunner();

// For Node.js execution
if (typeof process !== 'undefined' && process.argv[1]?.includes('test-runner')) {
  mainRunner.runAll().catch(error => {
    console.error('Test execution failed:', error);
    process.exit(1);
  });
}